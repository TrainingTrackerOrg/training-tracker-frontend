import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingTrackerDTO } from '../training-tracker-page/training-tracker-dto.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyWorkoutsService {



  constructor(private http: HttpClient) { }

  getUsersWorkouts(creatorId: number): Observable<TrainingTrackerDTO[]> {
    return this.http.get<TrainingTrackerDTO[]>(`http://localhost:8080/api/trainings/all-by-user-id/${creatorId}`);
  }
}
