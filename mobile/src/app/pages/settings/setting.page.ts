import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../services/log.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})


export class SettingPage implements OnInit {

  username = "";

  constructor(private router: Router,
              private logService: LogService,
              public storage: Storage) {

                this.username = this.logService.username;
                console.log(this.logService.username)

              }

  ngOnInit() {
  }

  nav(num: number) {
    switch(num) {
      case 0:
        this.router.navigateByUrl('/history');
        break;
      case 1:
        this.router.navigateByUrl('/home');
        break;
      case 2:
         this.router.navigateByUrl('/setting')
        break;
    }
  }

  async getData(key) {
    const keyVal = await this.storage.get(key);
    console.log('Key is', keyVal);
  }


  async setData(key, value) {
    const res = await this.storage.set(key, value);
    console.log(res);
  }

  logout() {
    this.getData("username");
    this.setData("username", "");
    this.router.navigateByUrl('login');
  }



}
