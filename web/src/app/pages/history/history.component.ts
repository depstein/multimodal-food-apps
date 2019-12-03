import { Component, OnInit, ViewChild } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';
import { InputModalComponent } from 'src/app/components/input-modal/input-modal.component';

declare var $: any;
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @ViewChild('inputDialog') dialog: InputModalComponent;
  date = new Date();

  availableDates = [];

  logs: any[];

  constructor(private conm: CommunicationService, public db: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.conm.setDialog(this.dialog);

    this.db.getLogs().subscribe(
      (arr) => {
        for (const log of arr) {
          const tstmp = log['date']['seconds'] * 1000;
          const dd = new Date(tstmp);

          const mod = 24 * 60 * 60 * 1000;
          const df = new Date().getTimezoneOffset() * 60 * 1000;

          const val = Math.floor((tstmp + df) / mod) * mod;
          if (!this.availableDates.includes(val)) {
            this.availableDates.push(val);
          }

          for (const entry of log['entries']) {
            if (entry['modality'] === 'foodImg') {
              // entry['entry'] = this.db.imgUrl(entry['entry']);
              entry['entry'] = entry['url'];
            }
          }

        }

        for (let i = 0; i < this.availableDates.length; ++i) {
          this.availableDates[i] = new Date(this.availableDates[i]);
        }

        this.logs = arr;
      }
    );
  }

  ngOnDestroy() {
    //clean up
    this.conm.draftEntries = [];
  }

  logout() {
    this.db.logout();
    this.router.navigateByUrl('/login');
  }

  isFirstDay(d) {
    if (this.availableDates != null && this.availableDates.length !== 0) {
      return this.conm.isSameDate(d, this.availableDates[this.availableDates.length - 1]);
    }
    return true;
  }
  isToday(d) {
    const today = new Date();
    return this.conm.isSameDate(d, today);
  }

  onPrev() {
    if (this.isFirstDay(this.date)) {
      return;
    }
    const newDate = new Date(this.date);
    newDate.setDate(this.date.getDate() - 1);
    this.date = newDate;
  }

  onNext() {
    if (this.isToday(this.date)) {
      return;
    }

    var newDate = new Date(this.date);
    newDate.setDate(this.date.getDate() + 1);
    this.date = newDate;
  }

  onSelect(index) {
    this.date = this.availableDates[index];
  }

  filterArray() {
    if (this.logs == null) {
      return [];
    }
    const tmp = this.logs.filter(
      (element) => {
        const eDate = new Date(element['date'].seconds * 1000);
        return this.conm.isSameDate(this.date, eDate);
      }
    );
    return tmp;
  }

}
