import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { User } from 'src/app/models/user.model';
import {AuthService} from "../../services/user.auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  dataSubmitted = false;
  failLogin = false;
  form: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  get formField(){ return this.form.controls; }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      pswd: ['', Validators.required],
    });
  }

  onSubmit() {

    if(this.form.valid) this.authService.signIn(this.formField['email'].value, this.formField['pswd'].value).then((user) => {
      this.dataSubmitted = true;
      this.failLogin = false;
    });
    this.failLogin = true;
  }

  get userInfo(){
    return this.authService.userInfoLogged
  }

  get userLogged(){
    return this.authService.isLogged
  }

  prepareForNewLogin(): void {
    this.dataSubmitted = false;
  }
}
