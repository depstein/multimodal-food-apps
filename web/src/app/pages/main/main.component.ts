import { Component, OnInit, ViewChild } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { DatabaseService } from 'src/app/services/database.service';

import {Observable} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { InputModalComponent } from 'src/app/components/input-modal/input-modal.component';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('dialog') dialog: InputModalComponent;
  draft = false;
  date = new Date();
  logs: any[];

  constructor(private conm: CommunicationService, private db: DatabaseService) { }

  ngOnInit() {
    // this.logs = this.db.getLogs();
    this.conm.setDialog(this.dialog);

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
    this.conm.draftEntries = [];
  }

  onSave() {
    this.db.push();
    this.conm.draftEntries = [];
    this.draft = false;
  }

  onNewModal(index) {
    this.dialog.mode = index;
    $('#exampleModal').modal('toggle');
  }
}
