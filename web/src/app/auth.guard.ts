import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DatabaseService } from './services/database.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public db: DatabaseService, private router: Router) {

  }
  canActivate() {

    if (localStorage.getItem('current') !== null) {
      this.db.login(localStorage.getItem('current'));
      return true;
    }

    if (this.db.col === '') {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
