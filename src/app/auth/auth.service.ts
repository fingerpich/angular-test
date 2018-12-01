import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {User} from '../user/user';
import {tap} from 'rxjs/operators';
import {isPlatformBrowser} from '@angular/common';

const Base_URL =  'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platform: Object) {
    if (!isPlatformBrowser(this.platform)) { return; }
    const s = localStorage.getItem('userInfo');
    try {
      const userInfo: User = JSON.parse(s);
      this.loggedInUser.next(userInfo);
    } catch (e) {
      return null;
    }
  }

  login (email: string) {
    return this.http.get(Base_URL + 'users?email=' + email).pipe(tap((matchUsers: Array<User>) => {
      if (matchUsers && matchUsers.length) {
        const userInfo: User = matchUsers[0];
        if (isPlatformBrowser(this.platform)) {
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
        }
        this.loggedInUser.next(userInfo);
      }
    }));
  }

  getLoggedInUser() {
    return this.loggedInUser.asObservable();
  }

  logout() {
    if (isPlatformBrowser(this.platform)) {
      localStorage.setItem('userInfo', null);
    }
    this.loggedInUser.next(null);
    this.router.navigate(['/login']);
  }
}
