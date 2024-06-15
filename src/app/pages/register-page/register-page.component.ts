import { Component, OnInit } from '@angular/core';
import { RegisterDto } from './register-dto.model';
import { RegisterServiceService } from './register-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerData:RegisterDto;
  constructor(private registerService: RegisterServiceService) {
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
    this.registerService.register(this.registerData).subscribe();
  }
}
