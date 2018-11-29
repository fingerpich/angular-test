import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import {PostService} from './posts/post.service';

@NgModule({
  declarations: [PostsComponent, TodosComponent, AlbumsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    PostService
  ]
})
export class UserModule { }
