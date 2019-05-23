import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
})
export class EntryPage implements OnInit {

  modalities_list = []
  
  constructor(private router: Router,
              private logService: LogService) { }

  ngOnInit() {
  }

  navigate(num: number) {
    switch (num) {
      case 0:
      this.router.navigateByUrl('e-barcode');
      break;
      case 1:
      this.router.navigateByUrl('e-description');
      break;
      case 2:
      this.router.navigateByUrl('e-search');
      break;
      case 3:
      this.router.navigateByUrl('e-voice');
      break;
      case 4:
      this.router.navigateByUrl('e-url');
      break;
      case 5:
      this.router.navigateByUrl('e-camera');
      break;
    }
  }

  onSubmit() {
    this.logService.setName('Yuqi3');
    this.logService.setPlatform('ios');
    this.logService.push();
  }

  onRemove(index) {
    this.logService.data.entries = this.logService.data.entries.filter( (entry) => {
      return entry !== this.logService.data.entries[index];
    });
  }

  onEdit(index) {
    const m = this.logService.data.entries[index]['modality'];
    if (m === 'foodDsrp') {
      this.router.navigateByUrl('e-description/' + index);
    } else if (m === 'foodImg') {
      this.router.navigateByUrl('e-camera/' + index);
    } else if (m === 'barcode') {
      this.router.navigateByUrl('e-barcode/' + index);
    } else if (m === 'database') {
      this.router.navigateByUrl('e-search/' + index);
    } else if (m === 'url') {
      this.router.navigateByUrl('e-url/' + index);
    } else if (m === 'voice') {
      this.router.navigateByUrl('e-voice/' + index);
    }
  }

}
