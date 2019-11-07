import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.db.logout();
    this.router.navigateByUrl('/login');
  }
}
