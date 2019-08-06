import { Component, OnInit, ViewChild } from '@angular/core';

import { CommunicationService } from 'src/app/services/communication.service';
declare var $: any;

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {
  @ViewChild('file') file;

  textEntry = "";
  img: any;

  mode: number;
  editIndex: number = -1;

  constructor(private conm: CommunicationService) { }

  ngOnInit() {

  }

  getName(mode) {
    switch (mode) {
      case 0:
        return 'Description';
      case 1:
        return 'Search';
      case 2:
        return 'Image';
      case 3:
        return 'URL';
      case 4:
        return 'Voice';
      case 5:
        return 'Barcode';
    }
  }

  isText(mode) {
    return mode === 0 || mode === 1 || mode === 3;
  }

  onClose() {
    this.cleanUp();
    $('#exampleModal').modal('toggle');
  }

  onSave() {
    if (this.isText(this.mode)) {
      if (this.editIndex === -1 && this.textEntry.length === 0) {
        return;
      }
      if (this.editIndex === -1) {
        const title = this.getName(this.mode);

        const obj = { 'title': title, 'content': this.textEntry };
        this.conm.draftEntries.push(obj);
        $('#exampleModal').modal('toggle');
        this.cleanUp();
      } else {

        this.conm.draftEntries[this.editIndex]['content'] = this.textEntry;
        this.editIndex = -1;
        $('#exampleModal').modal('toggle');
        this.cleanUp();
      }
    } else {
      if (this.editIndex === -1 && !this.img) {
        return;
      }
      if (this.editIndex === -1) {
        const title = this.getName(this.mode);
        const obj = { 'title': title, 'content': this.img };
        this.conm.draftEntries.push(obj);
        $('#exampleModal').modal('toggle');
        this.cleanUp();
      } else {
        this.conm.draftEntries[this.editIndex]['content'] = this.img;
        $('#exampleModal').modal('toggle');
        this.cleanUp();
      }
    }

  }

  onFileChange(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (_event) => {
      this.img = reader.result;
      // if (this.editIndex === -1) {
      //   this.img = reader.result;
      // } else {
      //   // this.conm.draftEntries[this.editIndex]['content'] = reader.result.toString();
      //   this.img
      // }
    };
  }

  cleanUp() {
    this.editIndex = -1;
    this.textEntry = '';
    this.img = null;
  }

}
