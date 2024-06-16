import { Injectable } from '@angular/core';
import { TrainingTrackerDTO } from './training-tracker-dto.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingTrackerService {

  constructor(private http: HttpClient) { }

  createTraining(formData: TrainingTrackerDTO) {
    return this.http.post<TrainingTrackerDTO>(`http://localhost:8080/api/trainings`,formData)
  }
}
