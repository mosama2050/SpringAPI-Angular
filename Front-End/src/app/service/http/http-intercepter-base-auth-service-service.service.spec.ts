import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBaseAuthServiceServiceService } from './http-intercepter-base-auth-service-service.service';

describe('HttpIntercepterBaseAuthServiceServiceService', () => {
  let service: HttpIntercepterBaseAuthServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercepterBaseAuthServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
