import { Component } from '@angular/core';
import { LogService } from '../services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private logService: LogService, 
              private router: Router) {
    this.logService.setPlatform('Mobile');
    this.logService.setName('Yuqi2');
  }

  onConfirmPage() {
    this.router.navigateByUrl('/confirmation');
  }

  onClick() {
    this.logService.clear();
    const p = new Map<string, string>();
    p['modality'] = 'foodImg';
    p['entry'] = 'base65';
    // p['data'] = 'data:image/jpeg;base64,' + '12345';
    this.logService.addEntry(p);
    this.logService.push();
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
    }
   }
}
