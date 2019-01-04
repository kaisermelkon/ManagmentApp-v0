import { TestBed } from '@angular/core/testing';

import { TodoHTTPService } from './todo-http.service';

describe('TodoHTTPService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoHTTPService = TestBed.get(TodoHTTPService);
    expect(service).toBeTruthy();
  });
});
