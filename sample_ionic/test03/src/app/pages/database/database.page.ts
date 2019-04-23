import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LogService } from 'src/app/services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {

  value: string;

  constructor(private location: Location,
              private logService: LogService,
              private router: Router) { }
  
  ngOnInit() {
  }

  onBack() {
    this.location.back();
  }

  onSave() {
    if(this.value === '') {
      return;
    } else {
      const p = new Map<string, string>();
      p['modality'] = 'database';
      p['entry'] = this.value;
      this.value = '';
      this.logService.addEntry(p);
      this.router.navigateByUrl('/confirmation');
    }
  }

}
