import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public static mode = 0;
  public static editIndex = -1;

  draftEntries = [
    {
      'title': 'Description', 
      'content': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, in. Unde dignissimos omnis reiciendis quidem.'
    },
    {
      'title': 'URL',
      'content': 'https://www.uci.edu/'
    },
  ];

  constructor() { }

  setMode(mode) {
    CommunicationService.mode = mode;
  }
  getMode() {
    return CommunicationService.mode;
  }

  setEdit(index) {
    CommunicationService.editIndex = index;
  }
  getEdit() {
    return CommunicationService.editIndex;
  }

  isSameDate(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }
}
