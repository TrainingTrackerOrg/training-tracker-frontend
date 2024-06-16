import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkoutsPageComponent } from './my-workouts-page.component';

describe('MyWorkoutsPageComponent', () => {
  let component: MyWorkoutsPageComponent;
  let fixture: ComponentFixture<MyWorkoutsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWorkoutsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWorkoutsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
