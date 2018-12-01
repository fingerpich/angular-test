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
import {
  MatButtonModule, MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule, MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {PreviewComponent} from './albums/preview/preview.component';

@NgModule({
  declarations: [PostsComponent, TodosComponent, AlbumsComponent, PreviewComponent],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule,
    MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatExpansionModule, MatIconModule, MatSlideToggleModule,
    MatListModule, MatSidenavModule, MatGridListModule, MatDialogModule
  ],
  entryComponents: [PreviewComponent],
  providers: [
    PostService, TodosService, AlbumsService
  ]
})
export class UserModule { }
