import { Injectable } from '@angular/core';
import { LogData } from '../model/log';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  username: string;
  data: LogData;
  private logsCollection: AngularFirestoreCollection;

  constructor(private afStorage: AngularFireStorage,
              private afs: AngularFirestore,
              private loadingController: LoadingController) {
    this.username = '';
    this.data = new LogData();
    this.data.date = new Date();
    this.data.entries = [];
  }

  clear() {
    this.data.date = new Date();
    this.data.entries = [];
  }

  setName(name: string) {
    this.username = name;
    this.logsCollection = this.afs.collection(this.username);
  }

  setPlatform(platform: string) {
    this.data.platform = platform;
  }

  addEntry(entry: Map<string, any>) {
    this.data.entries.push(entry);
  }

  async push() {
    if (this.username === '') {
      console.log('Error: Need an username.')
      return;
    }
    const loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 99999
    });
    loading.present();
    
    this.logsCollection.add({date: new Date(), platform: this.data.platform, contextLogged: false}).then(
      doc => {
        const tmp = [];
        let fileCounter = 0;
        this.data.entries.forEach(element => {
          const obj = {};
          obj['modality'] = element['modality'];
          if (typeof element['entry'] === 'string') {
            if (element['entry'] === 'base64_img') {
              obj['entry'] = doc.id + '_' + fileCounter.toString();
              fileCounter++;
              this.afStorage.ref(this.username + '/' + obj['entry']).putString(element['data'], 'data_url');
            } else {
              obj['entry'] = element['entry'];
            }
          } else {
            // File
            obj['entry'] = doc.id + '_' + fileCounter.toString();
            fileCounter++;
            this.afStorage.upload(this.username + '/' + obj['entry'], element['entry']);
          }
          tmp.push(obj);
        });
        this.afs.doc(this.username + '/' + doc.id).update({entries: tmp}).then(obj => {
          loading.dismiss();
        });
      }
    );
  }
}
