import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../login/user';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService:UserService,
    private router:Router,
    private toastr: ToastrService
    ) {

    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }

    this.registerForm = this.fb.group(formControls)
  }

  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }


  ngOnInit(): void {
    
    // let isLoggedIn = this.userService.isLoggedIn();

    // if (isLoggedIn) {
    //   this.router.navigate(['/people-list']);
    // } 
    
  
  }

  register() {
      let data = this.registerForm.value;
        
      let user = new User(data.email,data.password);
      console.log(user,'register');
          
      this.userService.registerUser(user).subscribe(
        res=>{
          this.toastr.success('Utilisateur ajouté avec succès')
          console.log(res);
          this.router.navigate(['/']);
        }
      )
      
     }
  }
