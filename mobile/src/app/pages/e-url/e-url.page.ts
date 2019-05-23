import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-e-url',
  templateUrl: './e-url.page.html',
  styleUrls: ['./e-url.page.scss'],
})
export class EUrlPage implements OnInit {
  index = -1;
  value = '';
  constructor(private router: Router,
              private logService: LogService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.index = parseInt(id, 10);
      this.value = this.logService.data.entries[this.index]['entry'];
    }
  }

  onSave() {
    if (this.value === '') {
      return;
    } else {
      if (this.index == -1) {
        const p = new Map<string, string>();
        p['modality'] = 'url';
        p['entry'] = this.value;
        this.logService.addEntry(p);
      } else {
        this.logService.data.entries[this.index]['entry'] = this.value;
      }
      this.value = '';
      this.router.navigateByUrl('/entry');
    }
  }

}
