
import {Component, EventEmitter, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {
  AbstractControl,
  FormBuilder, FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {ImagesService} from "../../services/images.service";
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import firebase from 'firebase/compat';
import DataSnapshot = firebase.database.DataSnapshot;


@Component({
  selector: 'configuration-root',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  user: User = new User();
  uid: any;
  configImg: Observable<any>;
  userImg: Observable<any>;

  dataSubmitted = false;
  form: FormGroup;

  fileName: string;
  fileUpload: any;

  constructor(
    route: ActivatedRoute,
    private userService: UserService,
    private imgService: ImagesService,
    private formBuilder: FormBuilder
  ) {
    route.params.subscribe((params) => {
      this.userService.retrieveUser(params.uid).then((userRef: DataSnapshot) => {
        this.user = userRef.val();
        this.uid = this.user.uid;
      });
    });
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({

        name: ['', [Validators.required,
          Validators.minLength(4),
          Validators.maxLength(16)]],
        birth: [null],
        nationality: [null],
        description: [null],
        fileImg: [null],
      },
    );
  }

  onSubmit() {

    this.userService.updateUser(this.uid, this.form.value);
    this.dataSubmitted = true;

  }

  get formField(){ return this.form.controls; }

  clearFormField(keys: string[]){
    for (let key in keys) {
      this.formField[keys[key]]?.reset();
    }
  }

  fileNameSelected(event: Event): void{
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.fileName = target.files[0].name;
      this.fileUpload = target.files[0];
    }
  }
}
