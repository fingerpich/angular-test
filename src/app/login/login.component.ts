import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  error: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.email = 'Sincere@april.biz';
  }

  loginSubmit($event: any) {
    $event.preventDefault();
    this.authService.login(this.email).subscribe(matchUsers => {
      if (!matchUsers) {
        this.error = 'Something went wrong with API';
      } else if (!matchUsers.length) {
        this.error = 'The Email did not match';
      } else {
        this.router.navigate(['/user']);
      }
    });
  }
}
