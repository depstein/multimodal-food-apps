/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { WebhookClient } = require('dialogflow-fulfillment');
const id = require('short-id');


process.env.DEBUG = 'dialogflow:*'; // enables lib debugging statements
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });


    //testing user sign in

    function userSignIn(agent) {
        const collection = agent.parameters.databaseCollection;
        //add something to check if they are the appropriate user
        agent.add(`User "${collection}" signed in. What would you like to log?`);
    }


    //let conv = agent.conv();

    function writeToDb(agent) {

        // Get parameter from Dialogflow with the string to add to the database
        const user = agent.getContext('awaiting_foodlog');
        console.log(user);
        var collection = user.parameters.databaseCollection;

        const databaseEntry = agent.parameters.databaseEntry;
        //                                      this is the @sys.any $databaseEntry

        // Get the database collection 'dialogflow' and document 'agent' and store
        // the document  {entry: "<value of database entry>"} in the 'agent' document
        return db.runTransaction(t => {
            //db.collection(collection).add({entries: [{entry: databaseEntry, modality: 'voice'}], date: admin.firestore.Timestamp.now(), platform: 'Google Home', contextLogged: false});
            db.collection(collection).add({ entries: [{ entry: databaseEntry, modality: 'voice' }], date: admin.firestore.Timestamp.now(), platform: 'Google Home', contextLogged: false }).then(
                ref => {
                    db.collection(collection).doc('--last--').set({ id: ref.id });
                }
            );

            return Promise.resolve('Write complete');
        }).then(doc => {
            agent.add(`"${databaseEntry}" has been logged.`);
        }).catch(err => {
            console.log(`Error writing to Firestore: ${err}`);
            agent.add(`Failed to log "${databaseEntry}".`);
        });
    }

    function readFromDb(agent) {
        const username = agent.getContext('awaiting_foodlog').parameters.databaseCollection;
        const collection = db.collection(username);
        const idDoc = collection.doc('--last--');
        const dialogflowAgentDoc = collection.doc('qFdgEbBoUtoNSGiH3b2R');

        return idDoc.get().then(
            id_doc => {
                if (!id_doc.exists) {
                    agent.add('Read for this account is not properly installed yet.');
                } else {
                    const doc_id = id_doc.data().id;
                    return collection.doc(doc_id).get().then(
                        (doc) => {
                            if (!doc.exists) {
                                agent.add('No data found');
                            } else {
                                var entries = doc.data().entries;
                                for (var i = 0; i < entries.length; ++i) {
                                    if (entries[i].modality === 'foodImg') {
                                        agent.add("an Image");
                                    } else {
                                        agent.add(entries[i].entry);
                                    }
                                }
                            }
                            return Promise.resolve('Read complete');
                        }).catch(() => {
                            agent.add('Something went wrong while reading the last document.');
                        });
                }
            }
        ).catch(() => {
            agent.add('Something went wrong! ID of last document not fonud.');
        });
    }

    // Map from Dialogflow intent names to functions to be run when the intent is matched
    let intentMap = new Map();
    intentMap.set('ReadFromFirestore', readFromDb);
    intentMap.set('SignIn', userSignIn);
    intentMap.set('WriteToFirestore', writeToDb);
    agent.handleRequest(intentMap);
});
