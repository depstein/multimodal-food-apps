import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  logs = undefined;
   
  show

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.db.getLogs('asc').subscribe(
      (arr) => {
        arr = arr.filter(
          (ele) => {
            return ele['contextLogged'] === false;
          }
        );
        this.logs = arr;
      }
    );
    console.log("logs:" +this.logs)
  }
  logout() {
    this.db.logout();
    this.router.navigateByUrl('/login');
  }

}
