import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.page.html',
  styleUrls: ['./voice.page.scss'],
})
export class VoicePage implements OnInit {

  matches: string[] = [];
  text = 'default';
  isRecording = false;
  isAvailable = false;;

  constructor(private location: Location,
              private speechRecognition: SpeechRecognition) { }

  ngOnInit() {
    this.speechRecognition.hasPermission().then(permission => {
      this.isAvailable = permission;
      if (!permission) {
        this.speechRecognition.requestPermission().then(
          () => this.isAvailable = true,
          () => this.isAvailable = false
        )
      }
    })
  }

  onBack() {
    this.location.back();
  }

  getPermission() {
    console.log(1);
    this.speechRecognition.hasPermission().then(permission => {
      console.log(permission);
      if(!permission) {
        this.speechRecognition.requestPermission().then(
          () => this.isAvailable = true,
          () => this.isAvailable = false
        )
      }
    })
  }

  startListening() {

    this.speechRecognition.startListening({language:'en-EN'}).subscribe(matches => {
      this.text = '123';
      this.matches = matches;
      this.text = matches[0];
    }, error => {
      this.text = error;
    });
    this.isRecording = true;
  }

  stopListening() {
    // this.sR.stopListening().then( () => {
    //   this.isRecording = false;
    // });
    this.speechRecognition.stopListening();
    this.isRecording = false;
  }
}
