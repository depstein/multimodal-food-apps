import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../services/log.service';
import { EntryCard } from '../../model/card';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  calendar_date: Date;
  private logsCollection: AngularFirestoreCollection<any>;
  logs: Observable<any[]>;
  logs_array: any[];


  constructor(private router: Router,
    private logService: LogService,
    private afs: AngularFirestore) {

    this.calendar_date = new Date()
    this.logsCollection = this.afs.collection('Kim', ref => ref.orderBy('date', 'asc'));

  }

  ngOnInit() {
  }

  nav(num: number) {
    switch (num) {
      case 0:
        this.router.navigateByUrl('/history');
        break;
      case 1:
        this.router.navigateByUrl('/home');
        break;
      case 2:
        this.router.navigateByUrl('/setting');
        break;
    }
  }

  backdate() {
    const newday = this.calendar_date.getDate() - 1;
    this.calendar_date.setDate(newday);
    this.logs_array = this.getentries();

  }

  forwarddate() {
    const check = new Date();
    if (this.calendar_date.toDateString() == check.toDateString()) {
      this.calendar_date = this.calendar_date
    }
    else {
      var newday = this.calendar_date.getDate() + 1
      this.calendar_date.setDate(newday)
    }
    this.logs_array = this.getentries();
  }

  getentries() {
    const entry = [];
    const logs = this.logsCollection.valueChanges();
    logs.subscribe((array) => {

      array.forEach(element => {
        // checks the date
        const dates = new EntryCard(element.date, element.entries, element.platform);
        if ((dates.date.getDate() === this.calendar_date.getDate())
        && (dates.date.getMonth() === this.calendar_date.getMonth())
        && (dates.date.getFullYear() === this.calendar_date.getFullYear())) {
          entry.push(dates);
        }

      });
    });
    return entry;
  }



}
