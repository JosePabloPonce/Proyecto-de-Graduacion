import { TestBed } from '@angular/core/testing';

import { HistoryDetailsService } from './history-details.service';

describe('HistoryDetailsService', () => {
  let service: HistoryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
