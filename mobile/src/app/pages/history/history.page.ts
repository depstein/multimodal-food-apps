import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../services/log.service';
import { EntryCard } from '../../model/card';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { HistoryDatePage } from '../historydate/historydate.page';
import { AngularFireStorage } from '@angular/fire/storage';
import * as moment from 'moment';


//change dates to times
//change icons for each entry

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
    private afs: AngularFirestore,
    public storage: Storage,
    public modalController: ModalController,
    private afStorage: AngularFireStorage) {

    this.calendar_date = new Date()
    this.logs_array= new Array()


//try and catch here because when you reload the app on the history page, it throws an error on logscollection
    try{
      console.log(this.logService.username)
      this.logsCollection = this.afs.collection(this.logService.username, ref => ref.orderBy('date', 'asc'));
      this.logs_array=this.getentries();
    }
    catch(error){
      this.router.navigateByUrl('login');
    }

  }

  ngOnInit() {
    console.log(this.logService.username)

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
    //moves dates back by one day
    const newday = this.calendar_date.getDate() - 1;
    this.calendar_date.setDate(newday);
    this.logs_array = this.getentries();

  }

  forwarddate() {
    //moves the date foward by one day
    const check = new Date();
    if (this.calendar_date.toDateString() == check.toDateString()) {
      this.calendar_date = this.calendar_date
      this.logs_array.length = 0
    }
    else {
      var newday = this.calendar_date.getDate() + 1
      this.calendar_date.setDate(newday)
    }
    this.logs_array = this.getentries();
  }

  getentries() {
    //gets all entries in the database for user
    const entry = [];
    const logs = this.logsCollection.valueChanges();
    logs.subscribe((array) => {

      array.forEach(element => {
        // checks the date

        const dates = new EntryCard(element.date, element.entries, element.platform);
        if ((dates.date.getDate() === this.calendar_date.getDate())
        && (dates.date.getMonth() === this.calendar_date.getMonth())
        && (dates.date.getFullYear() === this.calendar_date.getFullYear())) {
          console.log(dates.entries);
          if (dates.entries) {
            for (let i = 0; i < dates.entries.length; ++i) {
              if (dates.entries[i].modality === 'foodImg') {
                dates.entries[i].entry = this.afStorage.ref(this.logService.username + '/' + element.entries[i].entry).getDownloadURL();
  
              }
            }
  
  
            entry.push(dates);
          }
        }

      });
    });
    return entry;
  }

  menu() {
    //opens the modal page for all dates
      this.modalController.create({
        component: HistoryDatePage,
        componentProps: {}
      }).then((modal)=>{
        modal.present()
        modal.onDidDismiss().then((data)=>{
          this.calendar_date=new Date(data['data']); //set new calendar date
          this.logs_array=this.getentries();//get new entries for date
        })
      });
    }

}
