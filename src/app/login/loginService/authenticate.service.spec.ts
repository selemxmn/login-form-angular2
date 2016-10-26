/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticateService } from './authenticate.service.ts';

describe('Service: Authenticate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticateService]
    });
  });

  it('should ...', inject([AuthenticateService], (service: AuthenticateService) => {
    expect(service).toBeTruthy();
  }));
});
