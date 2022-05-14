import {Component, EventEmitter, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {
  AbstractControl,
  FormBuilder, FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {AuthService} from "../../services/user.auth.service";
import {ImagesService} from "../../services/images.service";


@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dataSubmitted = false;
  form: FormGroup;

  fileName: string;
  fileUpload: any;

  constructor(
    private userService: UserService,
    private userAuth: AuthService,
    private imgService: ImagesService,
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
      this.form.addControl('imgFile', new FormControl(this.fileName));

      this.clearFormField(['email', 'pswd', 'confirm_pswd']);

      this.userService.createUpdateUser(this.form.value).then(() => {
        this.dataSubmitted = true;
      });

      this.imgService.uploadUserImage(userLogged.user?.uid!, this.fileName, this.fileUpload)

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


  fileNameSelected(event: Event): void{
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.fileName = target.files[0].name;
      this.fileUpload = target.files[0];
    }
  }
}
