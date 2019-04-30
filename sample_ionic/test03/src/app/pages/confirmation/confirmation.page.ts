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

  redirect(mode) {
    if (mode === 0) {
      // camera
      this.router.navigateByUrl('/camera');
    } else if (mode === 1) {
      // barcode
      this.router.navigateByUrl('/barcode');
    } else if (mode === 2) {
      // description
      this.router.navigateByUrl('/description');
    } else if (mode === 3) {
      // database
      this.router.navigateByUrl('/database');
    } else if (mode === 4) {
      this.router.navigateByUrl('/voice');
    }
   }

   edit(index) {
     this.router.navigate(['edit', index]);
   }
}
