import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { LogService } from '../services/log.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})


export class SettingPage implements OnInit {

  constructor(private router: Router) {}

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

  logout() {
    this.router.navigateByUrl('login');
  }



}
