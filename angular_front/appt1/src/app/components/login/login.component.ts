import { Component, OnInit }                 from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
// import { from } from 'rxjs';

import { LoginService } from "src/app/services/login.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:  ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService : LoginService ) { }

  ngOnInit(): void {
  }

    hide_password = true;
    loginForm = new FormGroup({
      email :    new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required])
    })

    get email()    {return this.loginForm.get("email")!}
    get password() {return this.loginForm.get("password")!}

  getEmailErrorMessage() {
    if (this.email.hasError('required')) return 'You must enter a value'
    if (this.email.hasError('email'))    return 'Not a valid email'
    return ''
  }

  onSubmitLogin(){
    // console.warn(this.loginForm.value) // Debug Rodrigo
  }
}
