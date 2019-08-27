import { Injectable } from '@angular/core';
import { LogData } from '../model/log';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  username: string;
  data: LogData;
  logsCollection: AngularFirestoreCollection;

  constructor(private afStorage: AngularFireStorage,
              private afs: AngularFirestore,
              private loadingController: LoadingController) {
    this.username = '';
    this.data = new LogData();
    this.data.date = new Date();
    this.data.entries = [];

    firebase.auth().signInAnonymously();

    // console.log(firebase.auth());

  }

  clear() {
    this.data.date = new Date();
    this.data.entries = [];
  }

  setName(name: string) {
    this.username = name;
    this.logsCollection = this.afs.collection(this.username, ref => ref.orderBy('date', 'asc'));
  }

  setPlatform(platform: string) {
    this.data.platform = platform;
  }

  addEntry(entry: Map<string, any>) {
    this.data.entries.push(entry);
  }

  async push(callback = null) {
    if (this.username === '') {
      console.log('Error: Need an username.');
      return;
    }
    const loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 99999
    });
    loading.present();
    this.logsCollection.add({date: new Date(), platform: this.data.platform, contextLogged: false, entries: []}).then(
      doc => {
        const docId = doc.id;
        const update = this.logsCollection.doc('--last--').set({id: docId});
        const promises = [update];

        let fileCounter = 0;

        this.data.entries.forEach(element => {
          const obj = {};
          const mod = element['modality'];

          obj['modality'] = element['modality'];

          if (element['entry'] === 'base64_img') {

            const fileName = docId + '_' + fileCounter.toString(); fileCounter++;
            const task = this.afStorage.ref(this.username + '/' + fileName).putString(element['data'], 'data_url');
            fileCounter++;

            const t = task.snapshotChanges().toPromise().then(
              async (state) => {
                const downloadURL = await this.afStorage.ref(this.username + '/' + fileName).getDownloadURL().toPromise();
                this.logsCollection.doc(docId).set(
                  { ['entries']: firebase.firestore.FieldValue.arrayUnion({ modality: 'foodImg', entry: fileName, url: downloadURL }) },
                  { merge: true }
                );
              }
            );

            promises.push(t);

            // obj['entry'] = doc.id + '_' + fileCounter.toString();
            // fileCounter++;
            // this.afStorage.ref(this.username + '/' + obj['entry']).putString(element['data'], 'data_url');


          } else {


            // obj['entry'] = element['entry'];
            // const mod = this.convertToModality(entries[i].title);
            const t = this.logsCollection.doc(docId).set(
              { ['entries']: firebase.firestore.FieldValue.arrayUnion({ modality: mod, entry: element['entry'] }) },
              { merge: true }
            );
            promises.push(t);


          }

        });

        Promise.all(promises).then(
          () => {
            loading.dismiss();
            if (callback) {
              callback();
            }
          }
        );

      });
  }
}
