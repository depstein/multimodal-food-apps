import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommunicationService } from './communication.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  col = '';

  constructor(private db: AngularFirestore, private conm: CommunicationService, private afs: AngularFireStorage) { }

  login(usr) {
    localStorage.setItem('current', usr);
    this.col = usr;
  }

  logout() {
    this.col = '';
    localStorage.removeItem('current');
  }

  getLogs(mode = 'desc') {
    // return this.db.collection(this.col, ref => ref.orderBy('date', 'desc')).valueChanges();
    if (mode === 'desc') {
      return this.db.collection(this.col, ref => ref.orderBy('date', 'desc')).snapshotChanges().pipe(
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
    } else {
      return this.db.collection(this.col, ref => ref.orderBy('date', 'asc')).snapshotChanges().pipe(
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
    // console.log(id);
    return this.afs.ref(this.col + '/' + id).getDownloadURL();
  }

  updateContext(docId, data:Object, callback) {
    this.db.doc(this.col + '/' + docId).update({'context':data, 'contextLogged':true}).then(
      () => {
        if (callback) {
          callback();
        }
      }
    );
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
