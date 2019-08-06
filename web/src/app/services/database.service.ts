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

  col = 'yhuai';

  constructor(private db: AngularFirestore, private conm: CommunicationService, private afs: AngularFireStorage) { }

  getLogs() {
    return this.db.collection(this.col, ref => ref.orderBy('date', 'desc')).valueChanges();
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

  push() {

    const usr = this.col;

    const entries = this.conm.draftEntries;

    const collection = this.db.collection(usr);
    collection.add({'contextLogged': false, 'date': new Date(), 'platform': 'web', 'entries' : [] }).then(
      (doc) => {
        const docId = doc.id;
        console.log(docId);

        let fileCounter = 0;
        for (let i = 0; i < entries.length; ++i) {
          if (entries[i].title === 'Image') {
            const fileName = docId + '_' + fileCounter.toString(); fileCounter++;
            const task = this.afs.ref(usr + '/' + fileName).putString(entries[i].content, 'data_url');
            task.snapshotChanges().subscribe(
              async (state) => {
                if (state.bytesTransferred === state.totalBytes) {
                  const downloadURL = await this.afs.ref(usr + '/' + fileName).getDownloadURL().toPromise();
                  this.db.doc(usr + '/' + docId).set(
                    { ['entries'] : firebase.firestore.FieldValue.arrayUnion({modality: 'foodImg', entry: fileName, url: downloadURL})},
                    { merge : true }
                  );
                }
              }
            );
          } else {
            const mod = this.convertToModality(entries[i].title);
            this.db.doc(usr + '/' + docId).set(
              { ['entries'] : firebase.firestore.FieldValue.arrayUnion({modality: mod, entry: entries[i].content}) },
              { merge : true }
            );
          }
        }

      }
    );
  }
  
}
