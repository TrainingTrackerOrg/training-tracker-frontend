import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingTrackerDTO } from './training-tracker-dto.module';
import { TrainingTrackerService } from './training-tracker.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-training-tracker-page',
  templateUrl: './training-tracker-page.component.html',
  styleUrls: ['./training-tracker-page.component.css']
})
export class TrainingTrackerPageComponent implements OnInit {

  intensityOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  fatigueOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  formData: TrainingTrackerDTO  = {
    name: '',
    exerciseType: '',
    duration: 0,
    start: '',
    caloriesLost: 0,
    trainingIntensity: 0,
    fatigue: 0,
    creatorId: 0
  }
  constructor(private router: Router, private trainingTrackerService: TrainingTrackerService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    const userId = localStorage.getItem('userId');
    this.formData.creatorId = userId !== null ? +userId : 0;
    this.trainingTrackerService.createTraining(this.formData).subscribe(() => {
      this.snackbar.open("Saved successfully!", "Close", { duration: 4000})
      this.formData = {
        name: '',
        exerciseType: '',
        duration: 0,
        start: '',
        caloriesLost: 0,
        trainingIntensity: 0,
        fatigue: 0,
        creatorId: 0
      };
    },
      error =>{
        this.snackbar.open("Failed to save the training.","Close", {duration: 4000})
      }

  );
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    this.router.navigateByUrl('/login');
  }

  workouts() {
    this.router.navigateByUrl('/workouts');
    }
}
