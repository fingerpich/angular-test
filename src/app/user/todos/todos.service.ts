import { Injectable } from '@angular/core';
import {User} from '../user';
import {AuthService} from '../../auth/auth.service';
import * as appConsts from '../../app.consts';
import {HttpClient} from '@angular/common/http';
import {Todo} from './todo';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todosSubject = new BehaviorSubject<Array<Todo>>([]);

  constructor(private http: HttpClient, private authService: AuthService) {
    this.loadTodos();
  }

  loadTodos () {
    this.authService.getLoggedInUser().subscribe((user: User) => {
      if (user) {
        this.http.get(appConsts.Base_URL + 'todos?userId=' + user.id).subscribe((todos: Array<Todo>) => {
          if (todos && todos.length) {
            this.todosSubject.next(todos);
          }
        });
      }
    });
  }

  getTodos() {
    return this.todosSubject;
  }
}
