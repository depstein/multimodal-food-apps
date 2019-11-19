import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Context } from '../../model/context';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

declare var $: any;

@Component({
  selector: 'app-survey-record',
  templateUrl: './survey-record.component.html',
  styleUrls: ['./survey-record.component.scss']
})
export class SurveyRecordComponent implements OnInit {

  @Input() record: Object;

  // _date = this.record['date'];
  // _entries = this.record['entries'];;

  otherPlacePicked: boolean = false;
  otherMealPicked: boolean = false;

  context: Context = new Context();

  static readonly PLATFORM_MAP = { 'web': 'the website', 'Alexa': 'Alexa', 'Google Home': 'Google Home', 'mobile': 'the app', 'watch': 'the watch' };
  static readonly MODALITY_MAP = { 'foodImg': 'picture', 'barcodeImg': 'barcode', 'barcode': 'barcode', 'database': 'food database search', 'url': 'recipe link', 'foodDsrp': 'text description of the food', 'voice': 'voice description of the food' };


  situationValid = '';
  modalityValid = '';
  placeValid = '';
  mealValid = '';

  platformString = '';

  placeOther: string = undefined;
  mealOther: string = undefined;

  constructor(public db: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.platformString = SurveyRecordComponent.PLATFORM_MAP[this.record['platform']];

  }

  getTitle(modality) {
    return SurveyRecordComponent.MODALITY_MAP[modality];
  }

  get recordString() {
    let arr = Array.from(new Set(this.record['entries'].map((e => { return SurveyRecordComponent.MODALITY_MAP[e.modality] }))));
    //Lots of checks for proper punctuation...
    if (arr.length != 0) {
      let record = arr[0].toString();
      for (let i = 1; i < arr.length; i++) {
        if (i < arr.length - 1) {
          record += ', ' + arr[i];
        } else if (arr.length == 2) {
          record += ' and ' + arr[i];
        } else {
          record += ', and ' + arr[i];
        }
      }
      return record;
    }
  }

  pickMeal(mode) {
    this.otherMealPicked = mode;
  }

  pickPlace(mode) {
    this.otherPlacePicked = mode;
  }

  pickTime(mode) {

  }

  saveContext(form: NgForm) {
    let flag = true;

    if (this.otherPlacePicked) {
      if (!this.placeOther || this.placeOther === '') {
        this.placeValid = 'is-invalid';
        flag = false;
      } else {
        this.placeValid = 'is-valid';
        this.context.place = this.placeOther;
      }
    }

    if (this.otherMealPicked) {
      if (!this.mealOther || this.mealOther === '') {
        this.mealValid = 'is-invalid';
        flag = false;
      } else {
        this.mealValid = 'is-valid';
        this.context.meal = this.mealOther;
      }
    }

    // this.situationValid = this.context.situation === '' ? 'is-invalid' : 'is-valid';
    this.modalityValid = this.context.modality === '' ? 'is-invalid' : 'is-valid';

    // if (this.situationValid === 'is-invalid' || this.modalityValid === 'is-invalid') {
    if (this.modalityValid === 'is-invalid') {
      flag = false;
    }

    if (!flag) {
      this.toastError();
    } else {
      this.db.updateContext(this.record['docId'], this.context.getData(), () => {
        this.toastSuccess();
        $('.content').scrollTop(0);
      });

    }

  }

  toastSuccess() {
    var detached = $('#tWarning').detach();
    $('#tSuccess').toast({ delay: 3000, autohide: true });
    $('#tSuccess').toast('show');
    $('#toastArea').append(detached);
  }

  toastError() {
    var detached = $('#tSuccess').detach();
    $('#tWarning').toast({ delay: 3000, autohide: true });
    $('#tWarning').toast('show');
    $('#toastArea').append(detached);
  }
}
