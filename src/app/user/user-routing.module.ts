import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AlbumsComponent} from './albums/albums.component';
import {PostsComponent} from './posts/posts.component';
import {TodosComponent} from './todos/todos.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts'},
  { path: 'albums', component: AlbumsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'todos', component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
