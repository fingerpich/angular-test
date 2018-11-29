import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import {PostService} from './posts/post.service';
import {TodosService} from './todos/todos.service';
import {FormsModule} from '@angular/forms';
import {AlbumsService} from './albums/albums.service';

@NgModule({
  declarations: [PostsComponent, TodosComponent, AlbumsComponent],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    PostService, TodosService, AlbumsService
  ]
})
export class UserModule { }
