
import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {getAuth, signOut, user} from "@angular/fire/auth";
import {UserService} from "./user.service";
import {User} from "../models/user.model";
import firebase from "firebase/compat";
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged: User = new User();
  isLogged = false;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private userService: UserService
  ) {
    this.firebaseAuth.authState.subscribe((user) => {
      if(user){
        userService.retrieveUser(user.uid).then((userRef: DataSnapshot) => {
          this.userLogged = userRef.val();
          this.isLogged = true;
        })
      }else{
        this.isLogged = false;
      }
    });
  }

  get userInfoLogged(){
    return this.userLogged;
  }


  signUp(email: string, password: string){
    // automatically signs
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }


  signIn(email: string, password: string){
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
  }

  userSignOut(){
    signOut(getAuth()).then(() => {
      this.userLogged = new User();
    });
  }

}

