import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  dataSubmitted = false;
  form: FormGroup;


  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    this.dataSubmitted = true;

    if (this.form.invalid) { console.log("Formulario incorrecto"); return; }

    this.userService.create(this.form.value)

  }


  get formField(){ return this.form.controls; }

  createUser():void{
    this.userService.create(this.user).then(() => {
      console.log('Created new user successfully!');
      this.dataSubmitted = true;
    });

  }


  prepareForNewUser(): void {
    this.dataSubmitted = false;
    this.user = new User();
  }


}
