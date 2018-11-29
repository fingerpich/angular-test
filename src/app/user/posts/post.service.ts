import { Injectable } from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import {Post} from './post';
import {AuthService} from '../../auth/auth.service';
import {BehaviorSubject} from 'rxjs';
import * as appConsts from '../../app.consts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new BehaviorSubject<Array<Post>>([]);
  constructor(private http: HttpClient, private authService: AuthService) {
    this.loadPosts();
  }

  loadPosts() {
    this.authService.getLoggedInUser().subscribe((user: User) => {
      if (user) {
        this.http.get(appConsts.Base_URL + 'posts?userId=' + user.id).subscribe((posts: Array<Post>) => {
          if (posts && posts.length) {
            this.postSubject.next(posts);
          }
        });
      }
    });
  }

  getPosts() {
    return this.postSubject;
  }

  getComments(post: Post) {
    return this.http.get(appConsts.Base_URL + 'comments?postId=' + post.id);
  }
}
