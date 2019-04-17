import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LogService } from 'src/app/services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  constructor(private location: Location,
              private logService: LogService,
              private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.location.back();
  }

  onPush() {
    this.logService.push();
  }

  onClear() {
    this.logService.clear();
  }

  onHome() {
    this.router.navigateByUrl('/');
  }

}
