import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

import { IonicStorageModule } from '@ionic/storage';

import { HistoryDatePage } from './pages/historydate/historydate.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {FooterBarComponent} from './footer-bar/footer-bar.component';


@NgModule({
  declarations: [AppComponent,
                  HistoryDatePage],
  entryComponents: [HistoryDatePage],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            IonicStorageModule.forRoot(),
            AppRoutingModule,
            AngularFireModule.initializeApp(environment.firebase),
            AngularFirestoreModule,
            AngularFireStorageModule,
            BrowserAnimationsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    Camera,
    SpeechRecognition
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
