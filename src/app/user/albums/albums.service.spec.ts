import { TestBed } from '@angular/core/testing';

import { AlbumsService } from './albums.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('AlbumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule ],
  }));

  it('should be created', () => {
    const service: AlbumsService = TestBed.get(AlbumsService);
    expect(service).toBeTruthy();
  });
});
