import { Component, OnInit } from '@angular/core';
import { RegisterDto } from './register-dto.model';
import { RegisterServiceService } from './register-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerData:RegisterDto;
  constructor(private registerService: RegisterServiceService, private snackBar: MatSnackBar,private router: Router) {
    this.registerData = {
      fullName: '',
      username: '',
      password: '',

    }
   }

  ngOnInit(): void {
  }

  onSubmit(loginForm: any) {
    const formData = {
      fullName: this.registerData.fullName,
      username: this.registerData.username,
      password: this.registerData.password
    };

    this.registerService.register(this.registerData).subscribe(
      response => {
        this.snackBar.open('Registration successful', 'Close', {
          duration: 4000
        });
      this.router.navigateByUrl('/login')
      },
      error => {
        if (error.status === 409) {
          console.log("ASFCSDFSDFSDFSSSSS")
          this.snackBar.open('Username is already taken', 'Close', {
            duration: 4000
          });
        } else {
          this.snackBar.open('An error occurred', 'Close', {
            duration: 4000
          });
        }
      }
    );
  }
  navigateToLogin() {
    this.router.navigateByUrl('/login');
    }
}
