import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';

  constructor(private router: Router, public db: DatabaseService) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.username.length !== 0) {
      this.db.setUser(this.username);
      this.router.navigateByUrl('/main');
    } else {
      $('.toast').toast({delay: 3000, autohide: true});
      $('.toast').toast('show');
    }
  }

}
