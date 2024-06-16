import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeeklyDataDTO } from './weekly-data-dto.module';

@Injectable({
  providedIn: 'root'
})
export class WeeklyDataService {


  constructor(private http: HttpClient) { }

  getData(creatorId: number, week: number, month: string): Observable<WeeklyDataDTO>{
    return this.http.get<WeeklyDataDTO>(`http://localhost:8080/api/trainings/all-by-month/${month}/${week}/${creatorId}`);
  }
}
