import { Component } from '@angular/core';

import { User } from 'src/app/models/user.model';
import {UserService} from "../../services/user.service";


@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  name: string;
  password: string;

  user: User = new User();
  dataSubmitted = false;

  constructor(private userService: UserService) {
  }


  login(){
    console.log(this.name);
    console.log(this.password);
  }


}
