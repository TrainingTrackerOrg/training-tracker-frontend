import { Component, OnInit } from '@angular/core';
import { MyWorkoutsService } from './my-workouts.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TrainingTrackerDTO } from '../training-tracker-page/training-tracker-dto.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-workouts-page',
  templateUrl: './my-workouts-page.component.html',
  styleUrls: ['./my-workouts-page.component.css']
})
export class MyWorkoutsPageComponent implements OnInit {


  workouts: TrainingTrackerDTO[] = [];
  creatorId: number = 0;
  constructor(private workoutService: MyWorkoutsService, private snackbar: MatSnackBar,private router: Router) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    this.creatorId = userId !== null ? +userId : 0;
    this.workoutService.getUsersWorkouts(this.creatorId).subscribe(res =>{
      this.workouts=res;
    });
  }
  logout() {
    this.router.navigateByUrl('/login');
  }

  redirectToTracker() {
    this.router.navigateByUrl('/training-tracker');
  }

}
