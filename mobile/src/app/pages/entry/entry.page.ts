import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
})
export class EntryPage implements OnInit {

  modalities_list: any[];

  constructor() {
    this.modalities_list = []
    //this.modalities_list.push(1)
  }

  ngOnInit() {
  }

}
