import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../services/log.service';
import { EntryCard } from '../../model/card';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-historydate',
  templateUrl: './historydate.page.html',
  styleUrls: ['./historydate.page.scss']
})
export class HistoryDatePage implements OnInit {
  calendar_date: Date;
  private logsCollection: AngularFirestoreCollection<any>;
  logs: Observable<any[]>;
  logs_array: any[];
  pass_date: Date;

  constructor(
    private router: Router,
    private logService: LogService,
    private afs: AngularFirestore,
    public modalController: ModalController
  ) {
    this.calendar_date = new Date();
    this.pass_date = new Date();
    this.logs_array = new Array();

    this.logsCollection = this.afs.collection(this.logService.username, ref => ref.orderBy('date', 'asc'));

    this.logs_array = this.getentries();
  }

  ngOnInit() { }

  dismiss() {
    //closes the modal
    this.modalController.dismiss(this.pass_date);
  }

  getentries() {
    //collects all entries in the database
    const entry = [];
    const logs = this.logsCollection.snapshotChanges();
    logs.subscribe(array => {
      array.forEach(element => {
        const ele = element.payload.doc.data();
        // checks the date
        console.log(ele.date);
        const dates = new EntryCard(ele.date, ele.entries, ele.platform, element.payload.doc.id);
        entry.push(dates);
      });
    });
    return entry;
  }

  getdate(log) {
    //gets the date of the clicked entry
    var x = new Date(log.date);
    this.pass_date = x;
    this.dismiss();
  }
}
