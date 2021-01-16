import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  error:string
  constructor(private router: Router) {
    this.createLoginForm();
  }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.loginForm.status == 'INVALID'){
      this.error = 'Username / Password cannot be left empty';
    }else{
      if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == '123'){
        // do something
        localStorage.setItem('isLogged',"true");
        // redirect to our main component
        this.router.navigate(['dashboard']);
      }else{
        // remain here
        this.loginForm.setErrors({ status: 'INVALID'});
        this.error = 'Invalid credentials, please specify valid ones! ';
      }
    }
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required)
      });
      this.loginForm.setErrors({ status: 'VALID'});
  }
}
