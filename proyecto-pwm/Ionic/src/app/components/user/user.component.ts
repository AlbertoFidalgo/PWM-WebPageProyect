import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ImagesService} from '../../services/images.service';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import firebase from 'firebase/compat';
import DataSnapshot = firebase.database.DataSnapshot;
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();
  uid: any;
  configImg: Observable<any>;
  userImg: Observable<any>;
  constructor(route: ActivatedRoute,
              private imagesService: ImagesService,
              private userService: UserService) {
    route.params.subscribe((params) => {
      this.userService.retrieveUser(params.uid).then((userRef: DataSnapshot) => {
        this.user = userRef.val();
        this.getImages();
      });
    });
  }


  ngOnInit(): void {
  }

  getImages() {
    // TODO testear
    if(this.user.imgFile == null){this.userImg = this.imagesService.getImage('user_images/generic/user.png');}
    else{this.userImg = this.imagesService.getImage('user_images/' + this.user.uid  +  '/' + this.user.imgFile);}
    this.configImg = this.imagesService.getImage('assets/configIcon.png');
  }

}
