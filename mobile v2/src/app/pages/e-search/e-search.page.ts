import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-e-search',
  templateUrl: './e-search.page.html',
  styleUrls: ['./e-search.page.scss'],
})
export class ESearchPage implements OnInit {

  value = '';
  index = -1;

  placeholders = ["Calories", "Sodium", "Total Fat", "Potassium", "Saturated", "Total Carbs", "Polyunsaturated", "Dietary Fiber", "Cholesterol", "Sugar"]

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
        p['modality'] = 'database';
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
