import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommunicationService } from './communication.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  col = '';

  constructor(private db: AngularFirestore, private conm: CommunicationService, private afs: AngularFireStorage) { }

  getLogs() {
    return this.db.collection(this.col, ref => ref.orderBy('date', 'desc')).valueChanges();
  }

  setUser(usr) {
    this.col = usr;
  }

  convertToModality(title) {
    if (title === 'Description') {
      return 'foodDsrp';
    } else if (title === 'Search') {
      return 'database';
    } else {
      return 'url';
    }
  }

  imgUrl(id) {
    return this.afs.ref(this.col + '/' + id).getDownloadURL();
  }

  push(callback = null) {

    const usr = this.col;

    const entries = this.conm.draftEntries;

    const collection = this.db.collection(usr);
    collection.add({ 'contextLogged': false, 'date': new Date(), 'platform': 'web', 'entries': [] }).then(
      (doc) => {
        const docId = doc.id;

        const promises = [];


        let fileCounter = 0;
        for (let i = 0; i < entries.length; ++i) {
          if (entries[i].title === 'Image') {
            const fileName = docId + '_' + fileCounter.toString(); fileCounter++;
            const task = this.afs.ref(usr + '/' + fileName).putString(entries[i].content, 'data_url');

            const t = task.snapshotChanges().toPromise().then(
              async (state) => {
                const downloadURL = await this.afs.ref(usr + '/' + fileName).getDownloadURL().toPromise();
                this.db.doc(usr + '/' + docId).set(
                  { ['entries']: firebase.firestore.FieldValue.arrayUnion({ modality: 'foodImg', entry: fileName, url: downloadURL }) },
                  { merge: true }
                );
              }
            );
            promises.push(t);

          } else {
            const mod = this.convertToModality(entries[i].title);
            const t = this.db.doc(usr + '/' + docId).set(
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
