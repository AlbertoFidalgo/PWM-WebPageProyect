import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from 'src/app/models/user.model';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user?: User;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  message = '';

  currentUser: User = {
    name: '',
    email: '',
    password: '',
    description: '',
  };

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.message = '';
  }


  ngOnChanges(): void {
    this.message = '';
    this.currentUser = { ...this.user };
  }


  updateUser(): void {
    const data = {
      name: this.currentUser.name,
      email: this.currentUser.email
    };
    if (this.currentUser.key) {
      this.userService.update(this.currentUser.key, data)
        .then(() => this.message = 'The user was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  removeUser(): void {
    if (this.currentUser.key) {
      this.userService.delete(this.currentUser.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The user was updated successfully!'; })
        .catch(err => console.log(err));
    }
  }

}
