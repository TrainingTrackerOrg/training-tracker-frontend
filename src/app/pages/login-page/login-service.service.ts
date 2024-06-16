import { Injectable } from '@angular/core';
import { LoginDto } from './login-dto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtDTO } from './jwt-dto.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router, private snackbar: MatSnackBar) { }

  public login(loginDto: LoginDto): void {
      this.http.post<JwtDTO>( `http://localhost:8080/api/login/authentication`, loginDto).subscribe((res: JwtDTO) => {
        if(res.accessToken !== null){
          let jwt = res.accessToken;


          if (jwt) {
            localStorage.setItem('accessToken', jwt);

            let decodedJWT;
            if (jwt != null) {
                decodedJWT = JSON.parse(window.atob(jwt.split('.')[1]));
                localStorage.setItem("userId",decodedJWT.userId);

            }
          }
          this.router.navigateByUrl('/training-tracker');

        } else {
          this.snackbar.open("False Credentials", "Close", { duration: 4000});
        }
        }
        );
  }

}
