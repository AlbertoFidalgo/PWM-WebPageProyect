import {Component, OnInit} from '@angular/core';

import { User } from 'src/app/models/user.model';
import {UserService} from "../../services/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User = new User();
  dataSubmitted = false;

  form: FormGroup;

  get usernameControl() {
    return this.form.get('username') as FormControl;
  }
  get passwordControl() {
    return this.form.get('password') as FormControl;
  }


  constructor(private userService: UserService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm():void{
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }




}
