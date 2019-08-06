import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  date = new Date();

  availableDates = [];

  logs: any[];

  constructor(private conm: CommunicationService, private db: DatabaseService) { }

  ngOnInit() {
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
              console.log(entry);
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

  onPrev() {
    var newDate = new Date(this.date);
    newDate.setDate(this.date.getDate() - 1);
    this.date = newDate;
  }

  onNext() {
    const today = new Date();
    if (this.date.getFullYear() === today.getFullYear()
      && this.date.getMonth() === today.getMonth() 
      && this.date.getDate() === today.getDate()) {
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
