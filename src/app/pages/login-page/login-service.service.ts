import { Injectable } from '@angular/core';
import { LoginDto } from './login-dto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtDTO } from './jwt-dto.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public login(loginDto: LoginDto): void {
    this.http.post<JwtDTO>( `http://localhost:8080/api/login/authentication`, loginDto).subscribe((res: JwtDTO) => {
      let jwt = res.accessToken;
      console.log(res.accessToken)
      if (jwt) {
        localStorage.setItem('accessToken', jwt);

        let decodedJWT;
        if (jwt != null) {
            decodedJWT = JSON.parse(window.atob(jwt.split('.')[1]));
            localStorage.setItem("userId",decodedJWT.userId);
            console.log("DSGFSDFGSDFSDF")
        }



      }
    });
  }

}
