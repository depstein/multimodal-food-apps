import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../services/log.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})


export class LoginPage implements OnInit {

  username:string;

  constructor(private route: Router,
              private logService: LogService,
              public storage: Storage,
              public alertController: AlertController)
              {
                this.username=""
             }

  ngOnInit() {
    //checks if the user is already logged in
    this.storage.get('username').then(values=>{
      console.log(values)
      if (values != null){
        this.username = values;
        this.logService.setName(this.username);
        this.logService.setPlatform('mobile');

        this.setData('username',this.username);
        this.username="";//resets the placeholder
        this.route.navigateByUrl('history');
      }
    })
  }

  async setData(key, value) {
    //sets the key, value in storage
      const res = await this.storage.set(key, value);
      }

  async getData(key) {
    //gets value for key on storage
      const keyVal = await this.storage.get(key);
      }

  presentAlert() {
   this.alertController.create({
   header: 'Invalid Username',
   message: 'Username cannot be empty',
   buttons: ['OK']
   }).then((alert) => {
   alert.present();
   });
   }

  login() {
    //if username is valid, proceeds to app
    if (this.username!=""){
    this.logService.setName(this.username);
    this.logService.setPlatform('mobile');
    this.setData('username',this.username);
    console.log(this.setData('username',this.username));

    this.username="";//resets login to username placeholder
    this.route.navigateByUrl('history');
    }
    else{
      this.presentAlert()
    }
  }


}
