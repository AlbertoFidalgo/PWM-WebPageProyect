import {Component, Input, OnInit} from '@angular/core';
import { LoginComponent } from "../login/login.component";
import {AuthService} from "../../services/user.auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  get userSigned(){
    return this.authService.userInfoLogged;
  }

  get logged(){
    return this.authService.isLogged;
  }

  signOutUser(){
    this.authService.userSignOut()
  }

}
