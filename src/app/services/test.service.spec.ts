import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [TestService, HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });
});
