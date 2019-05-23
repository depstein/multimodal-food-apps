import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Router, ActivatedRoute } from '@angular/router';
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
  index = -1;

  constructor(private speechRecognition: SpeechRecognition,
              private router: Router,
              private logService: LogService,
              private changeDetectorRef: ChangeDetectorRef,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.index = parseInt(id, 10);
      this.result = this.logService.data.entries[this.index]['entry'];
    }
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
    if(this.result === '') {
      return;
    }
    if (this.index == -1) {
      const p = new Map<string, string>();
      p['modality'] = 'voice';
      p['entry'] = this.result;
      this.logService.addEntry(p);
    } else {
      this.logService.data.entries[this.index]['entry'] = this.result;
    }
    this.router.navigateByUrl('/entry');
  }



}
