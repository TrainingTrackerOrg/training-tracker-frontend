import { Component, OnInit } from '@angular/core';
import { WeeklyDataService } from './weekly-data.service';
import { Router } from '@angular/router';
import { WeeklyDataDTO } from './weekly-data-dto.module';

@Component({
  selector: 'app-weekly-data',
  templateUrl: './weekly-data.component.html',
  styleUrls: ['./weekly-data.component.css']
})
export class WeeklyDataComponent implements OnInit {

  weeklyDataDTO:WeeklyDataDTO = {
    weeklyDuration: 0,
    numberOfTrainings: 0,
    avgFatigue: 0,
    avgIntensity: 0
  }
  year: number = 2024;
  week:number = 0;
  month: string = '';
  creatorId: number = 0;
  constructor(private weeklyService: WeeklyDataService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const userId = localStorage.getItem('userId');
    this.creatorId = userId !== null ? +userId : 0;
      this.weeklyService.getData(this.creatorId, this.week, this.month, this.year).subscribe(res => {
        this.weeklyDataDTO = res;
      });
    }

  logout() {
    this.router.navigateByUrl('/login');
    }
    workouts() {
      this.router.navigateByUrl('/workouts');
    }
    tracker() {
      this.router.navigateByUrl('/training-tracker');
    }
}
