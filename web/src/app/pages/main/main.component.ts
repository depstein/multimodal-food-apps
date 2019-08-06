import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { DatabaseService } from 'src/app/services/database.service';

import {Observable} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  draft = true;
  date = new Date();
  // logs: Observable<any[]>;
  logs: any[];

  constructor(private conm: CommunicationService, private db: DatabaseService) { }

  ngOnInit() {
    // this.logs = this.db.getLogs();
    this.db.getLogs().subscribe(
      (arr) => {
        const today = new Date();
        arr = arr.filter((element: Object) => {
          const eDate = new Date(element['date'].seconds * 1000);

          return this.conm.isSameDate(today, eDate);
        });

        for (const log of arr) {
          for (const entry of log['entries']) {
            if (entry['modality'] === 'foodImg') {
              console.log(entry);
              // entry['entry'] = this.db.imgUrl(entry['entry']);
              entry['entry'] = entry['url'];
            }
          }
        }
        this.logs = arr;
      }
    );
  }



  onNewEntry() {
    if (!this.draft) {
      this.draft = true;
    }
  }

  onClear() {
    this.draft = false;
  }

  onSave() {
    this.db.push();
    this.conm.draftEntries = [];
    this.draft = false;
  }

  onNewModal(index) {
    // $('#exampleModal').modal('toggle');
    // jQuery()
    this.conm.setMode(index);
    $('#exampleModal').modal('toggle');
  }

  onEdit() {
    console.log("edit clicked");
  }
  onRemove() {
    console.log("remove clicked");
  }

}
