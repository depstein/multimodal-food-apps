import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../services/log.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})


export class LoginPage implements OnInit {

  username:string;

  constructor(private route: Router,
              private logService: LogService,
               public storage: Storage)
              {
                this.username=""
             }

  ngOnInit() { }

  async setData(key, value) {
      const res = await this.storage.set(key, value);
      console.log(res);
      }

  async getData(key) {
      const keyVal = await this.storage.get(key);
      console.log('Key is', keyVal);
      }

  login() {
    if (this.username!=""){
    this.logService.setName(this.username);
    this.setData('username', this.username);
    this.username=""
    this.route.navigateByUrl('home');
    }
  }


}
