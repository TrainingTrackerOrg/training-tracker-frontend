import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTrackerPageComponent } from './training-tracker-page.component';

describe('TrainingTrackerPageComponent', () => {
  let component: TrainingTrackerPageComponent;
  let fixture: ComponentFixture<TrainingTrackerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingTrackerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingTrackerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
