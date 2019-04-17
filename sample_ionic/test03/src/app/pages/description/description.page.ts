import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  value: string;

  constructor(private location: Location,
              private router: Router,
              private logService: LogService) { }

  ngOnInit() {
  }

  onSave() {
    if (this.value === '') {
      return;
    } else {
      const p = new Map<string, string>();
      p['modality'] = 'foodDsrp';
      p['entry'] = this.value;
      this.logService.addEntry(p);
      this.router.navigateByUrl('/confirmation');
    }
  }

  onBack() {
    this.location.back();
  }

}
