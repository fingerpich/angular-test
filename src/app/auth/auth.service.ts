import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {User} from '../user/user';
import {tap} from 'rxjs/operators';

const Base_URL =  'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private router: Router) {
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
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        this.loggedInUser.next(userInfo);
      }
    }));
  }

  getLoggedInUser() {
    return this.loggedInUser.asObservable();
  }

  logout() {
    localStorage.setItem('userInfo', null);
    this.loggedInUser.next(null);
    this.router.navigate(['/login']);
  }
}
