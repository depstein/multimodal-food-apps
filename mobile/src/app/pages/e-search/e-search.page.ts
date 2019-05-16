import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-e-search',
  templateUrl: './e-search.page.html',
  styleUrls: ['./e-search.page.scss'],
})
export class ESearchPage implements OnInit {

  value = '';
  constructor(private router: Router,
              private logService: LogService) { }

  ngOnInit() {
  }

  onSave() {
    if (this.value === '') {
      return;
    } else {
      const p = new Map<string, string>();
      p['modality'] = 'database';
      p['entry'] = this.value;
      this.value = '';
      this.logService.addEntry(p);
      this.router.navigateByUrl('/entry');
    }
  }

}
