import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LogData } from '../../model/log';
import { LogService } from 'src/app/services/log.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  logsToday: any[];

  constructor(private router: Router,
              private logService: LogService,
              private afs: AngularFirestore,
              private afStorage: AngularFireStorage) { }
  

  ngOnInit() {

    this.logService.setName('yhuai');
    this.logService.setPlatform('mobile');

    this.logService.logsCollection.valueChanges().subscribe(
      data => {
        this.logsToday = [];
        data.forEach(element => {
          const docDate = element.date.toDate();
          if (this.isToday(docDate)) {
            this.logsToday.push(element);
          }
        });
        this.logsToday.sort((a, b) => {return b.date - a.date;})
        console.log(this.logsToday);
      }
    )
  }

  isToday(date: Date) {
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  }

  nav(num: number) {
    switch(num) {
      case 0:
        this.router.navigateByUrl('/history');
        break;
      case 1:
        break;
      case 2:
         this.router.navigateByUrl('/setting')
        break;
    }
  }

  getImgURL(index, id) {
    var pathReference = this.afStorage.ref(this.logService.username + '/' + id);
    console.log(index, pathReference);
    pathReference.getDownloadURL().subscribe((url) => {
      const ele: HTMLImageElement = <HTMLImageElement>document.getElementById('img-'+index);
      ele.src = url;
    })
    return id;
    // return this.afStorage.ref(this.logService.username + '/' + id).getDownloadURL().toPromise().then((url) => {
    //   return url;
    // });
  }
}
