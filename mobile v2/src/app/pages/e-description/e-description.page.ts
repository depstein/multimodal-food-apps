import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-description',
  templateUrl: './e-description.page.html',
  styleUrls: ['./e-description.page.scss'],
})
export class EDescriptionPage implements OnInit {

  value = '';
  index = -1;
  constructor(private logService: LogService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.index = parseInt(id, 10);
      this.value = this.logService.data.entries[this.index]['entry'];
    }
  }

  onSave() {
    if (this.value !== '') {
      // save
      if (this.index == -1) {
        const p = new Map<string, string>();
        p['modality'] = 'foodDsrp';
        p['entry'] = this.value;
        this.logService.addEntry(p);
      } else {
        this.logService.data.entries[this.index]['entry'] = this.value;
      }
      this.value = '';
      this.router.navigateByUrl('/entry');
    } else {
      // empty value
      return;
    }
  }
}
