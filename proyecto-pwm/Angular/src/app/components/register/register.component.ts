import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {
  AbstractControl,
  FormBuilder, FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {AuthService} from "../../services/user.auth.service";


@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dataSubmitted = false;
  form: FormGroup;

  constructor(
    private userService: UserService,
    private userAuth: AuthService,
    private formBuilder: FormBuilder
  ) {  }

  ngOnInit(): void {

    let PswdPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,16}$";

    this.form = this.formBuilder.group({

      name: ['', [Validators.required,
                  Validators.minLength(4),
                  Validators.maxLength(16)]],

      pswd: [null, [Validators.required,
                    Validators.pattern(PswdPattern)]],
      confirm_pswd: [null,  Validators.required],
      email: ['', [Validators.required,
                    Validators.email]],
      birth: [null],
      nationality: [null],
      description: [null],
      fileImg: [null],
    },
      {validators: (sent: AbstractControl) => {
          const pswd = sent.get('pswd')?.value;
          const confirm_pswd = sent.get('confirm_pswd')?.value;
          return pswd === confirm_pswd ? null : { notSame: true }
          },

        }
      );
  }

  onSubmit() {

    if (this.form.invalid) {
      console.log("invalid form. Aborting...");
      return;
    }

    this.userAuth.signUp(this.formField['email'].value, this.formField['pswd'].value).then((userLogged) =>{

        this.form.addControl('uid', new FormControl(userLogged.user?.uid));
        this.clearFormField(['email', 'pswd', 'confirm_pswd']);

        this.userService.createUpdateUser(this.form.value).then(() => {
          this.dataSubmitted = true;
        });

      }
    )

  }

  get formField(){ return this.form.controls; }

  clearFormField(keys: string[]){
      for (let key in keys) {
        this.formField[keys[key]]?.reset();
      }
  }

  prepareForNewUser(): void {
    this.dataSubmitted = false;
  }



}
