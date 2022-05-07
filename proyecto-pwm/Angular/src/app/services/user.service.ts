import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {User} from "../models/user.model";


@Injectable({ providedIn: 'root' })

export class UserService {

  private dbUsersPath = '/users';
  UsersRefList: AngularFireList<User>;

  constructor(
    private db: AngularFireDatabase,
  ) {
    this.UsersRefList = db.list(this.dbUsersPath);
  }

  createUpdateUser(user: User){
    return this.db.database.ref(this.dbUsersPath + "/" + user.uid).set(user);
  }

  retrieveUser(uid: string): Promise<any>{
    return this.db.database.ref(this.dbUsersPath + "/" + uid).get();
  }


}
