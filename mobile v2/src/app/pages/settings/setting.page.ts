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
    //footerbar attributes
    titleLayout = 'hide';
    position = 'center';
    fabVisible = true;
    icon = 'add';

  constructor(private router: Router,
              private logService: LogService,
              public storage: Storage) {

                this.storage.get('username').then(values=>{
                  this.logService.username = values;
                  this.username = values;
                })
                console.log(this.username)
                console.log(this.logService.username)
                this.username = this.logService.username;
              }

  ngOnInit() {
  }

  async fabButtonClick() {
    this.router.navigateByUrl("/entry");
  }

  nav(num: number) {
    switch(num) {
      case 0:
        this.router.navigateByUrl('/history');
        break;
      case 1:
        this.router.navigateByUrl('/entry');
        break;
      case 2:
         this.router.navigateByUrl('/setting')
        break;
    }
  }

  logout() {
  //logs user out of app, removes user information in storage
    this.logService.username="";
    this.storage.remove("username");
    this.router.navigateByUrl('login');
  }



}
