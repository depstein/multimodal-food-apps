import { Component } from '@angular/core';
import { LogService } from '../services/log.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private logsCollection: AngularFirestoreCollection<any>;
  logs: Observable<any[]>;
  logs_array: any[] = null;

  current_index: number;
  max_index: number;

  constructor(private logService: LogService, 
              private router: Router,
              private afs: AngularFirestore) {


    this.logsCollection = this.afs.collection('Yuqi2', ref => ref.orderBy('date', 'asc'));
    this.logs = this.logsCollection.valueChanges();

    this.logs.subscribe(items => {
      this.logs_array = items;
      
      this.max_index = this.logs_array.length - 1;
      this.current_index = this.max_index;
    })
    // this.logs.subscribe()
    this.logService.setPlatform('Mobile');
    this.logService.setName('Yuqi2');
  }

  onConfirmPage() {
    this.router.navigateByUrl('/confirmation');
  }

  onClick() {
    this.logService.clear();
    const p = new Map<string, string>();
    p['modality'] = 'foodImg';
    p['entry'] = 'base65';
    // p['data'] = 'data:image/jpeg;base64,' + '12345';
    this.logService.addEntry(p);
    this.logService.push();
  }

  redirect(mode) {
    if (mode === 0) {
      // camera
      this.router.navigateByUrl('/camera');
    } else if (mode === 1) {
      // barcode
      this.router.navigateByUrl('/barcode');
    } else if (mode === 2) {
      // description
      this.router.navigateByUrl('/description');
    } else if (mode === 3) {
      // database
      this.router.navigateByUrl('/database');
    }
   }

  onPrev() {
    this.current_index -= 1;
  }
  onNext() {
    this.current_index += 1;
  }
}
