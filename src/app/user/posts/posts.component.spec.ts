import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import {PostService} from './post.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [ PostService ],
      imports: [ HttpClientModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
