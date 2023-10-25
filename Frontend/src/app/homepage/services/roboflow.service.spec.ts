import { TestBed } from '@angular/core/testing';

import { RoboflowService } from './roboflow.service';

describe('RoboflowService', () => {
  let service: RoboflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoboflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
