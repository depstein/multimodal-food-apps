import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LogData } from '../../model/log';
import { LogService } from 'src/app/services/log.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as moment from 'moment';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  logsToday: any[];
  now:any;

  constructor(private router: Router,
              private logService: LogService,
              private afs: AngularFirestore,
              private afStorage: AngularFireStorage,
              private alertController: AlertController) { }
  

  ngOnInit() {

    this.logService.setPlatform('mobile');
    this.now = moment().format('dddd, MMM Do, YYYY');
    if (!this.logService.logsCollection) {
      return;
    }
    // this.logService.logsCollection.valueChanges().subscribe(
    //   data => {
    //     this.logsToday = [];
    //     data.forEach(element => {

    //       const docDate = element.date.toDate();
    //       if (this.isToday(docDate)) {
    //         if (element.entries) {
    //           // tslint:disable-next-line: prefer-for-of
    //           for (let i = 0; i < element.entries.length; ++i) {
    //             if (element.entries[i].modality === 'foodImg') {
    //               element.entries[i].entry = this.afStorage.ref(this.logService.username + '/' + element.entries[i].entry).getDownloadURL();
    //             }
    //           }
    //           this.logsToday.push(element);
    //         }
    //       }
    //     });
    //     this.logsToday.sort((a, b) => b.date - a.date);
    //   }
    // )
    this.logService.logsCollection.snapshotChanges().subscribe(
      data => {
        this.logsToday = [];
        data.forEach(element => {
          const obj = {...element.payload.doc.data(), docId: element.payload.doc.id};

          const docDate = obj['date'].toDate();
          if (this.isToday(docDate)) {
            if(obj['entries']) {
              for (let i = 0; i < obj['entries'].length; ++i) {
                if (obj['entries'][i].modality === 'foodImg') {
                  obj['entries'][i].entry = this.afStorage.ref(this.logService.username + '/' + obj['entries'][i].entry).getDownloadURL();
                }
              }
              this.logsToday.push(obj);
            }
          }
        });
        if(this.logsToday && this.logsToday.length > 0) {
          this.logsToday.sort((a, b) => b.date - a.date);
        }
      }
    );
  }

  isToday(date: Date) {
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  }

  nav(num: number) {
    switch (num) {
      case 0:
        this.router.navigateByUrl('/history');
        break;
      case 1:
        break;
      case 2:
        this.router.navigateByUrl('/setting');
        break;
    }
  }

  async deleteEntry(docId) {




    const alert = await this.alertController.create({
      header: 'Delete Confirmation!',
      message: 'Are you sure you want to delete this entry?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            // console.log('Confirm Okay');
            // document.getElementById(docId).remove();
            this.logService.remove(docId);

          }
        }
      ]
    });

    await alert.present();

  }
}
