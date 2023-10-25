import { TestBed } from '@angular/core/testing';

import { HistoryListService } from './history-list.service';

describe('HistoryListService', () => {
  let service: HistoryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
