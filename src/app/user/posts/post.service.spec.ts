import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule ],
  }));

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });
});
