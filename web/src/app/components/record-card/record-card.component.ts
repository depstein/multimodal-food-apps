import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { InputModalComponent } from '../input-modal/input-modal.component';

declare var $: any;

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss']
})
export class RecordCardComponent implements OnInit {
  @Input() title: any;
  @Input() content: any;
  @Input() editable: any;
  @Input() index;


  isImage: boolean;
  materialIcon ='';

  constructor(private conm: CommunicationService) { }

  ngOnInit() {
    console.log("title: "+ this.title)
    if (this.title === 'foodDsrp') {
      this.title = 'Description';
      this.materialIcon = 'description';
    } else if (this.title === 'url' || this.title === 'URL') {
      this.title = 'URL';
      this.materialIcon = 'link';
    } else if (this.title === 'database' || this.title === 'Search') {
      this.title = 'Search';
      this.materialIcon = 'search';
    } else if (this.title === 'foodImg') {
      this.title = 'Image';
      this.materialIcon = 'image';
    } else if (this.title === 'barcode' || this.title === 'Barcode') {
      this.title = 'Barcode';
      this.materialIcon = 'reorder';
    } else if (this.title === 'voice' || this.title === 'Voice') {
      this.title = 'Voice';
      this.materialIcon = 'record_voice_over';
      console.log(this.materialIcon);
    }

    this.isImage = this.title === 'Image';

  }

  onEdit() {
    const arr = ['Description','Search','Image', 'URL',   'Voice', 'Barcode'];

    this.conm.getDialog().editIndex = this.index;
    this.conm.getDialog().mode = arr.indexOf(this.title);

    if (this.title === 'Image') {
      this.conm.getDialog().img = this.content;
    } else {
      this.conm.getDialog().textEntry = this.content;
    }

    $('#exampleModal').modal('toggle');
  }
  onRemove() {
    this.conm.draftEntries.splice(this.index, 1);
  }

}
