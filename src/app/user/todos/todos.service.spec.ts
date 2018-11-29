import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('TodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule ],
  }));

  it('should be created', () => {
    const service: TodosService = TestBed.get(TodosService);
    expect(service).toBeTruthy();
  });
});
