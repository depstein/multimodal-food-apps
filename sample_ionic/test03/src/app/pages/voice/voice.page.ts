import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { LogService } from 'src/app/services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.page.html',
  styleUrls: ['./voice.page.scss'],
})
export class VoicePage implements OnInit {

  matches: string[];
  isRecording = false;
  isAvailable = false;

  constructor(private location: Location,
              private speechRecognition: SpeechRecognition,
              private changeDetectorRef: ChangeDetectorRef,
              private logService: LogService,
              private router: Router) { }

  ngOnInit() {
    // this.speechRecognition.hasPermission().then(permission => {
    //   this.isAvailable = permission;
    //   if (!permission) {
    //     this.speechRecognition.requestPermission().then(
    //       () => this.isAvailable = true,
    //       () => this.isAvailable = false
    //     )
    //   }
    // })
  }

  onBack() {
    this.location.back();
  }

  getPermission() {
    this.speechRecognition.hasPermission().then(permission => {
      console.log(permission);
      if (!permission) {
        this.speechRecognition.requestPermission().then(
          () => this.isAvailable = true,
          () => this.isAvailable = false
        );
      }
    });
  }

  startListening() {

    this.speechRecognition.startListening({language: 'en-EN'}).subscribe(matches => {
      this.matches = [];
      matches.forEach(item => this.matches.push(item));
      this.changeDetectorRef.detectChanges();
    }, error => {
    });
    this.isRecording = true;
  }

  stopListening() {
    this.speechRecognition.stopListening();
    this.isRecording = false;
  }

  onSave() {
    const p = new Map<string, string>();
    p['modality'] = 'voice';
    p['entry'] = this.matches[0];
    this.logService.addEntry(p);
    this.router.navigateByUrl('/confirmation');
  }
}
