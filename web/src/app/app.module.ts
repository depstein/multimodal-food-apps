import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { InputModalComponent } from './components/input-modal/input-modal.component';
import { RecordCardComponent } from './components/record-card/record-card.component';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './pages/history/history.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyRecordComponent } from './components/survey-record/survey-record.component';
import { SpeechRecognitionModule } from '@kamiazya/ngx-speech-recognition';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    InputModalComponent,
    RecordCardComponent,
    HistoryComponent,
    SurveyComponent,
    SurveyRecordComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    SpeechRecognitionModule.forRoot({ lang: 'en-US' })
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
