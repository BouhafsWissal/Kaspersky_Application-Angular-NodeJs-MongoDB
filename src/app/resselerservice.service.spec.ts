import { TestBed } from '@angular/core/testing';

import { ResselerserviceService } from './resselerservice.service';

describe('ResselerserviceService', () => {
  let service: ResselerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResselerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
