import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  searchText: string;
  posts: Array<Post>;
  selectedPost: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
  getComments(post: Post) {
    this.postService.getComments(post).subscribe((comments: Array<Comment>) => {
      post.comments = comments;
    });
  }

  togglePost(post: Post) {
    if (this.selectedPost === post) {
      this.selectedPost = null;
      return;
    }
    this.selectedPost = post;
    if (!post.comments) {
      this.getComments(post);
    }
  }

  filterPosts(text: string) {
    const regex = new RegExp(text);
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts.filter(post => {
        return regex.test(post.title) || regex.test(post.body);
      });
    });
  }

  trackByFn(post: Post) {
    return post.id;
  }
}
