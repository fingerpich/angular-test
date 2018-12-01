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
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule, MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [PostsComponent, TodosComponent, AlbumsComponent],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule,
    NgxImageGalleryModule,
    MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatExpansionModule, MatIconModule, MatSlideToggleModule,
    MatListModule, MatSidenavModule, MatGridListModule, MatCardModule
  ],
  entryComponents: [],
  providers: [
    PostService, TodosService, AlbumsService
  ]
})
export class UserModule { }
