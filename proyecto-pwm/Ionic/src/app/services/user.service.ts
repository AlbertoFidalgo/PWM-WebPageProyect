import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import {User} from '../models/user.model';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/compat/storage';
import {user} from "@angular/fire/auth";
import {isEmpty} from "rxjs/operators";


@Injectable({ providedIn: 'root' })

export class UserService {

  usersRefList: AngularFireList<User>;
  private dbUsersPath = '/users';

  constructor(
    private db: AngularFireDatabase,
  ) {
    this.usersRefList = db.list(this.dbUsersPath);
  }

  createUpdateUser(user: User){
    return this.db.database.ref(this.dbUsersPath + '/' + user.uid).set(user);
  }

  retrieveUser(uid: string): Promise<any>{
    return this.db.database.ref(this.dbUsersPath + '/' + uid).get();
  }

  updateUser(uid: string, data: any){
    if(data.name) {
      this.db.database.ref(this.dbUsersPath + '/' + uid).update({name: data.name});
    }
    if(data.nationality) {
      this.db.database.ref(this.dbUsersPath + '/' + uid).update({nationality: data.nationality});
    }
    if(data.birth) {
      this.db.database.ref(this.dbUsersPath + '/' + uid).update({birth: data.birth});
    }
    if(data.description) {
      this.db.database.ref(this.dbUsersPath + '/' + uid).update({description: data.description});
    }
    if(data.imgFile) {
      this.db.database.ref(this.dbUsersPath + '/' + uid).update({imgFile: data.imgFile});
    }
    return;
  }
}
