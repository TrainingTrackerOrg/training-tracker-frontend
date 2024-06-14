import { Injectable } from '@angular/core';
import { LoginDto } from './login-dto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private http: HttpClient) { }

  login(loginData: LoginDto) : Observable<string>{

    return this.http.post<string>('http://localhost:8080/api/login/authentication', loginData);
  }
}
