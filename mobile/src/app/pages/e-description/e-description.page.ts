import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-description',
  templateUrl: './e-description.page.html',
  styleUrls: ['./e-description.page.scss'],
})
export class EDescriptionPage implements OnInit {

  value = '';
  constructor(private logService: LogService,
              private router: Router) { }

  ngOnInit() {
  }

  onSave() {
    if (this.value !== '') {
      // save
      const p = new Map<string, string>();
      p['modality'] = 'foodDsrp';
      p['entry'] = this.value;
      this.logService.addEntry(p);
      this.router.navigateByUrl('/entry');

    } else {
      // empty value
      return;
    }
  }
}
