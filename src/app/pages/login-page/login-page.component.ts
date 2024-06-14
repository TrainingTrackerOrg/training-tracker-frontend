import { Component, OnInit } from '@angular/core';
import { LoginDto } from './login-dto.model';
import { LoginServiceService } from './login-service.service';
import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginData: LoginDto;
  constructor(private loginService: LoginServiceService) {
    this.loginData = {
      username: '',
      password: ''
    };
  }


  ngOnInit(): void {
  }

  onSubmit(loginForm: any) {
    const formData = {
      username: this.loginData.username,
      password: this.loginData.password
    };
    this.loginService.login(this.loginData).subscribe();
  }
}
