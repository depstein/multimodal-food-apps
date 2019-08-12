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
  @ViewChild('inputDialog') dialog: InputModalComponent;
  draft = false;
  date = new Date();
  logs: any[];

  clear = 'CLEAR';

  constructor(private conm: CommunicationService, public db: DatabaseService) { }

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

    if (this.conm.draftEntries.length === 0) {
      this.draft = false;
    } else {
      $('#warningDialog').modal('toggle');
    }
  }

  onCancelClose() {
    $('#warningDialog').modal('toggle');
  }
  onCancelConfirm() {
    this.draft = false;
    this.conm.draftEntries = [];
    $('#warningDialog').modal('toggle');
  }

  onSave() {
    if (this.conm.draftEntries.length !== 0) {
      $('#mpDialog').modal('toggle');
      this.db.push(() => {
        $('#mpDialog').modal('toggle');
      });
      this.conm.draftEntries = [];
      this.draft = false;
    } else {
      $('.toast').toast({delay: 3000, autohide: true});
      $('.toast').toast('show');
      
    }
  }

  onNewModal(index) {
    this.dialog.mode = index;
    $('#exampleModal').modal('toggle');
  }
}
