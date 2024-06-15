import { Injectable } from '@angular/core';
import { RegisterDto } from './register-dto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {


  constructor(private http: HttpClient) { }

  register(registerData: RegisterDto) {
    return  this.http.post<RegisterDto>('http://localhost:8080/api/users', registerData)
  }
}
