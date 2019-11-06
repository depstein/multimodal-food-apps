import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommunicationService } from './communication.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import 'firebase/firestore';



// import * as admin from 'firebase-admin';

import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  col = '';

  constructor(private firedb: AngularFirestore, private conm: CommunicationService, private afs: AngularFireStorage) { }

  login(usr, callback = null) {
    localStorage.setItem('current', usr);
    this.col = usr;

    // console.log(this.col);
    // console.log(callback != null);
    if (callback != null) {
      callback();
    }

  }

  logout() {
    this.col = '';
    localStorage.removeItem('current');
    firebase.auth().signOut();
  }

  getLogs(mode = 'desc') {
    // return this.firedb.collection(this.col, ref => ref.orderBy('date', 'desc')).valueChanges();

    // console.log(this.col);
    // console.log(firebase.auth().currentUser.uid);

    const tmpCollection = this.firedb.collection(this.col, ref => ref.orderBy('date', mode === 'desc' ? mode : 'asc'));

    return tmpCollection.snapshotChanges().pipe(
      map(
        actions => actions.map(
          a => {
            const data = a.payload.doc.data();
            const docId = a.payload.doc.id;
            return {docId, ...data};
          }
        )
      )
    );
  }

  convertToModality(title) {
    if (title === 'Description') {
      return 'foodDsrp';
    } else if (title === 'Search') {
      return 'database';
    } else if (title === 'Barcode') {
      return 'barcode';
    } else if (title === 'Voice') {
      return 'voice';
    } else {
      return 'url';
    }
  }

  imgUrl(id) {
    // console.log(id);
    return this.afs.ref(this.col + '/' + id).getDownloadURL();
  }

  updateContext(docId, data:Object, callback) {
    this.firedb.doc(this.col + '/' + docId).update({'context':data, 'contextLogged':true}).then(
      () => {
        if (callback) {
          callback();
        }
      }
    );
  }

  remove(docId: string) {
    console.log(docId);
    const collection = this.firedb.collection(this.col);
    // collection.doc(docId).delete();
    collection.doc(docId).delete();
    // collection.doc('--last--').get().toPromise().then(
    //   doc => {
    //     if (doc.data().id !== docId) {
    //       // last document

    //     } else {
    //       // deleting last document
    //     }
    //   }
    // );
  }

  push(callback = null) {

    const usr = this.col;

    const entries = this.conm.draftEntries;

    const collection = this.firedb.collection(usr);
    collection.add({ 'contextLogged': false, 'date': new Date(), 'platform': 'web', 'entries': [] }).then(
      (doc) => {
        const update = collection.doc('--last--').set({id: doc.id});
        const docId = doc.id;

        const promises = [update];


        let fileCounter = 0;
        for (let i = 0; i < entries.length; ++i) {
          if (entries[i].title === 'Image') {
            const fileName = docId + '_' + fileCounter.toString(); fileCounter++;
            const task = this.afs.ref(usr + '/' + fileName).putString(entries[i].content, 'data_url');

            const t = task.snapshotChanges().toPromise().then(
              async (state) => {
                const downloadURL = await this.afs.ref(usr + '/' + fileName).getDownloadURL().toPromise();
                this.firedb.doc(usr + '/' + docId).set(
                  { ['entries']: firebase.firestore.FieldValue.arrayUnion({ modality: 'foodImg', entry: fileName, url: downloadURL }) },
                  { merge: true }
                );
              }
            );
            promises.push(t);

          } else {
            const mod = this.convertToModality(entries[i].title);
            const t = this.firedb.doc(usr + '/' + docId).set(
              { ['entries']: firebase.firestore.FieldValue.arrayUnion({ modality: mod, entry: entries[i].content }) },
              { merge: true }
            );
            promises.push(t);
          }
        }

        Promise.all(promises).then(
          () => {
            if (callback != null) {
              callback();
            }
          }
        );

      }
    );
  }

}
