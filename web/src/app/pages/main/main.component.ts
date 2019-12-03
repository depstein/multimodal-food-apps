import { Component, OnInit, ViewChild } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { DatabaseService } from 'src/app/services/database.service';

import {Observable} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { InputModalComponent } from 'src/app/components/input-modal/input-modal.component';
import { Router } from '@angular/router';

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
  
  dataToEdit;
  toDelete;

  constructor(private conm: CommunicationService, public db: DatabaseService, private router: Router) { }

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
    this.dataToEdit = undefined; //so the edit panel is closed if the user wants to enter a new entry
    this.conm.draftEntries = [];
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
    this.toDelete = '';
    $('#warningDialog').modal('toggle');
  }

  onDeleteConfirm() {
    this.db.remove(this.toDelete);
    this.toDelete = '';
    this.dataToEdit = undefined; //in case the user deletes an entry that was previosly selected to be edited
    $('#confirmDeleteDialog').modal('toggle');
  }

  onCancelConfirm() {
    this.draft = false;
    this.conm.draftEntries = [];
    $('#warningDialog').modal('toggle');
  }

  onSave() {
    if (this.conm.draftEntries.length !== 0) {
      $('#dialogSuccessful').modal('toggle');
      this.db.push(() => {
        $('#dialogSuccessful').modal('toggle');
      });
      this.conm.draftEntries = [];
      this.draft = false;
    } else {
      $('#nothingToSave').toast({delay: 3000, autohide: true});
      $('#nothingToSave').toast('show');
      
    }
  }

  selectedToEdit(log) {
    
    this.conm.draftEntries = []; //reseting modalities to a new entry that was selected
    this.dataToEdit = log;
    this.dataToEdit.entries.map(
      (entry) =>
        this.conm.draftEntries.push({ 'title': entry.modality, 'content': entry.entry })
    );
  }
  onUpdateEntry() {
    if (this.conm.draftEntries.length !== 0) {
      $('#mpDialog').modal('toggle');
      //will update in the db service using conm service entries 
      let promise = this.db.update2(this.dataToEdit);
      promise.then((resolve) => {
        $('#mpDialog').modal('toggle');
        
        if (resolve) {
          this.dataToEdit = undefined;
          $('#dialogSuccessful').toast({ delay: 3000, autohide: true });
          $('#dialogSuccessful').toast('show');
        } else { //update was not successfull
          $('#firebaseError').toast({ delay: 3000, autohide: true });
          $('#firebaseError').toast('show');
        }
      });
    } else {
      $('#nothingToSave').toast({ delay: 3000, autohide: true });
      $('#nothingToSave').toast('show');
    }
  }

  selectedToDelete(docId) {
    this.toDelete = docId;
  }

  onCancelUpdateEntry() {
    this.dataToEdit = undefined;
  }


  onNewModal(index) {
    this.dialog.mode = index;
    $('#exampleModal').modal('toggle');
  }

  logout() {
    this.db.logout();
    this.router.navigateByUrl('/login');
  }
}
