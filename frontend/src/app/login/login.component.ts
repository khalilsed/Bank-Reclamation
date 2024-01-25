// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Initialized with a default value

  constructor(private fb: FormBuilder, private authService: authService , private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {


    if (this.loginForm.valid) {
      const loginObj = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      this.authService.LoginService(loginObj).subscribe(
        (response) => {
          // Handle successful login
          console.log('Login successful');
          console.log(response.token);
          // Redirect or perform other actions as needed
          this.router.navigate(['/']);
        },
        (error) => {
          // Handle login error
          console.error('Login failed:', error);
          // Display error message or perform other actions as needed
        }
      );
    }
  }
}
