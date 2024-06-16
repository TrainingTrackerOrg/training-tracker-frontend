import { TestBed } from '@angular/core/testing';

import { WeeklyDataService } from './weekly-data.service';

describe('WeeklyDataService', () => {
  let service: WeeklyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
