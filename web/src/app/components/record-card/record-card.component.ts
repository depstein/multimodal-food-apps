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

  constructor(private conm: CommunicationService) { }

  ngOnInit() {
    // this.title = 'description';
    // this.content = 'apple';
    

    if (this.title === 'foodDsrp') {
      this.title = 'Description';
    } else if (this.title === 'url') {
      this.title = 'URL';
    } else if (this.title === 'database') {
      this.title = 'Database Search';
    } else if (this.title === 'foodImg') {
      this.title = 'Image';
    }

    this.isImage = this.title === 'Image';

  }

  onEdit() {
    console.log(this.index);

    const arr = ['Description', 'URL', 'Image', 'Search'];

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
    console.log(this.index);
    this.conm.draftEntries.splice(this.index, 1);
  }

}
