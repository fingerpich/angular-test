import { Component, OnInit } from '@angular/core';
import {TodosService} from './todos.service';
import {Todo} from './todo';
import {Post} from '../posts/post';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Array<Todo>;
  check: boolean;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todosService.getTodos().subscribe((todos: Array<Todo>) => {
      this.todos = todos;
    });
  }

  filterCompleted(justCompletedTodos: boolean) {
    this.todosService.getTodos().subscribe((todos: Array<Todo>) => {
      this.todos = todos.filter(todo => !justCompletedTodos || todo.completed);
    });
  }

  trackByFn(todo: Todo) {
    return todo.id;
  }
}
