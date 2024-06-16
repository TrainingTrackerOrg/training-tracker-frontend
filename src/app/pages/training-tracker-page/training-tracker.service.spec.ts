import { TestBed } from '@angular/core/testing';

import { TrainingTrackerService } from './training-tracker.service';

describe('TrainingTrackerService', () => {
  let service: TrainingTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
