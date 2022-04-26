import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {User} from "../models/user.model";

@Injectable({ providedIn: 'root' })

export class UserService {

  private dbPath = '/users';
  UsersRef: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.UsersRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<User> {
    return this.UsersRef;
  }

  create(tutorial: User): any {
    return this.UsersRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.UsersRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.UsersRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.UsersRef.remove();
  }

}
