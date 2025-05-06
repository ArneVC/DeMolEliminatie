import { TestBed } from '@angular/core/testing';

import { ElimserviceService } from './elimservice.service';

describe('ElimserviceService', () => {
  let service: ElimserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElimserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
