import { Injectable } from '@angular/core';
import { InputModalComponent } from '../components/input-modal/input-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public static mode = 0;
  public static editIndex = -1;

  dialog: InputModalComponent;

  draftEntries = [];
  // draftEntries = [
  //   {
  //     'title': 'Description', 
  //     'content': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, in. Unde dignissimos omnis reiciendis quidem.'
  //   },
  //   {
  //     'title': 'URL',
  //     'content': 'https://www.uci.edu/'
  //   },
  // ];

  constructor() { }

  getDialog() {
    return this.dialog;
  }

  setDialog(d) {
    this.dialog = d;
  }

  isSameDate(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }
}
