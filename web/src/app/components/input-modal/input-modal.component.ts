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

  constructor(private conm: CommunicationService) { }

  ngOnInit() {
    if (this.conm.getEdit() !== -1) {
      this.textEntry = this.conm.draftEntries[this.conm.getEdit()]['content'];
    }
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
    //TODO
    $('#exampleModal').modal('toggle');
  }

  onSave() {
    if (this.isText(this.conm.getMode())) {
      if (this.conm.getEdit() === -1 && this.textEntry.length === 0) {
        return;
      }
      if (this.conm.getEdit() === -1) {
        const title = this.getName(this.conm.getMode());

        const obj = { 'title': title, 'content': this.textEntry };
        this.conm.draftEntries.push(obj);
        $('#exampleModal').modal('toggle');
        this.textEntry = '';
      } else {

        // this.conm.draftEntries[this.conm.getEdit()]['content'] = this.textEntry;
        this.conm.setEdit(-1);
        $('#exampleModal').modal('toggle');
      }
    } else {
      if (this.conm.getEdit() === -1 && !this.img) {
        return;
      }
      if (this.conm.getEdit() === -1) {
        const title = this.getName(this.conm.getMode());
        const obj = { 'title': title, 'content': this.img };
        this.conm.draftEntries.push(obj);
        $('#exampleModal').modal('toggle');
        this.img = null;
      } else {
        this.conm.setEdit(-1);
        $('#exampleModal').modal('toggle');
      }
    }

  }

  onFileChange(file) {

    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (_event) => {
      this.img = reader.result;
    };

  }

  onEditFileChange(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = (_event) => {
      this.conm.draftEntries[this.conm.getEdit()]['content'] = reader.result.toString();
    };

  }

}
