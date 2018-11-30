import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {User} from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;
  onEditButtonClick: Function;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getLoggedInUser().subscribe((user: User) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
  }
}
