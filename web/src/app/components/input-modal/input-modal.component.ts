import { Component, OnInit, ViewChild } from '@angular/core';

import { CommunicationService } from 'src/app/services/communication.service';

import {
  RxSpeechRecognitionService,
  resultList,
} from '@kamiazya/ngx-speech-recognition';

import {
  SpeechRecognitionService
} from '@kamiazya/ngx-speech-recognition';

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

  placeholder = "";
  modalTitle = "";

  mode: number;
  editIndex: number = -1;

  showSearchResults = false;

  // transcript = '';
  isRecording = false;
  constructor(private conm: CommunicationService, private speechService: SpeechRecognitionService) {
    this.speechService.onstart = (e) => {
    };
    this.speechService.onresult = (e) => {
      this.textEntry = e.results[0].item(0).transcript;
      this.speechService.stop();
      this.isRecording = false;
    };
  }


  ngOnInit() {

  }

  onListen() {
    // this.speechService.listen().pipe(resultList).subscribe(
    //   (list) => {
    //     this.transcript = list.item(0).item(0).transcript;
    //     console.log('RxComponent:onresult', this.transcript, list);
    //   }
    // );
    if (!this.isRecording) {
      this.isRecording = true;
      this.speechService.start();
    }
  }

  getName(mode) {
    switch (mode) {
      case 0:
        this.placeholder = 'Please describe what you ate in whatever form would be most useful for you.';
        return 'Description';
      case 1:
        this.placeholder = 'Please describe the terms you would use to search from a database of foods commonly eaten and logged.';
        return 'Search';
      case 2:
        return 'Image';
      case 3:
        this.placeholder = 'Please enter the URL of a recipe or other website which describes what you ate.';
        return 'URL';
      case 4:
        return 'Voice';
      case 5:
        this.placeholder = 'Please enter the digits under the barcode';
        return 'Barcode';
    }
  }

  isVoice(mode) {
    return mode === 4;
  }

  isText(mode) {
    return mode !== 2 && mode !== 4 && mode !== 1;
  }

  isSearch(mode) {
    return mode === 1
  }


  onClose() {
    this.cleanUp();
    $('#exampleModal').modal('toggle');
  }

  onSave() {
    if (this.isText(this.mode) || this.isVoice(this.mode) || this.isSearch(this.mode)) {
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
      //this is an image
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

  toggleSearchResults() {
    if (this.textEntry !== ''){
      return true;
    } else return false;
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
    this.showSearchResults = false;
  }

}
