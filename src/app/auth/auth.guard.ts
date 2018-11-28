import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';
import {User} from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getLoggedInUser().pipe(map((user: User) => {
      const isLoggedIn =  !!user;
      if (!isLoggedIn) {
        this.router.navigate(['/login']);
      }
      return isLoggedIn;
    }));
  }
}
