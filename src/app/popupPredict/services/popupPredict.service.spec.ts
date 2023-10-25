import { TestBed } from '@angular/core/testing';

import { PopupPredictService } from './popupPredict.service';

describe('PopupService', () => {
  let service: PopupPredictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupPredictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
