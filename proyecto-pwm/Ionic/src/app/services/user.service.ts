import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import {User} from '../models/user.model';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/compat/storage';


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

}