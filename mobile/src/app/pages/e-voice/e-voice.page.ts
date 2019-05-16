import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-e-voice',
  templateUrl: './e-voice.page.html',
  styleUrls: ['./e-voice.page.scss'],
})
export class EVoicePage implements OnInit {
  matches: string[];
  isRecording = false;
  isAvailable = false;
  result = '';
  buttonText = 'Start Recording';

  constructor(private speechRecognition: SpeechRecognition,
              private router: Router,
              private logService: LogService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.speechRecognition.hasPermission().then(permission => {
      this.isAvailable = permission;
      if (!permission) {
        this.speechRecognition.requestPermission().then(
          () => this.isAvailable = true,
          () => this.isAvailable = false
        );
      }
    });
  }

  onRecording() {
    if (this.isAvailable) {
      if (this.isRecording) {
        // already recording
        this.buttonText = 'Start Recording';
        this.speechRecognition.stopListening();
        this.isRecording = false;
      } else {
        // not recording
        this.buttonText = 'Stop Recording';
        this.speechRecognition.startListening({language: 'en-EN'}).subscribe(matches => {
          this.matches = [];
          matches.forEach(item => this.matches.push(item));
          this.result = matches[0];
          this.changeDetectorRef.detectChanges();
        }, error => {
        });
        this.isRecording = true;
      }
    }
  }

  onSave() {
    const p = new Map<string, string>();
    p['modality'] = 'voice';
    p['entry'] = this.matches[0];
    this.logService.addEntry(p);
    this.router.navigateByUrl('/entry');
  }



}
