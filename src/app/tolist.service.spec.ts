import { TestBed } from '@angular/core/testing';

import { TolistService } from './tolist.service';

describe('TolistService', () => {
  let service: TolistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TolistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
