import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = new User();
  dataSubmitted = false;

  constructor(private userService: UserService) {

  }

  createUser():void{
    this.userService.create(this.user).then(() => {
      console.log('Created new item successfully!');
      this.dataSubmitted = true;
    });

  }

  prepareForNewUser(): void {
    this.dataSubmitted = false;
    this.user = new User();
  }

}
