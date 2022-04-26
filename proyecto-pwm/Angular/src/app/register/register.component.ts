import { Component } from '@angular/core';

@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: any;
  password: any;
  email: any;
  birth: any;
  nationality: any;
  description: any;

  constructor() {

  }

  register(){
    console.log(this.name);
    console.log(this.password);
    console.log(this.email);
    console.log(this.birth);
    console.log(this.nationality);
    console.log(this.description);
  }

}
