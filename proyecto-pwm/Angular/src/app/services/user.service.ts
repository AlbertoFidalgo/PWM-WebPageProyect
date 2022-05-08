import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {User} from "../models/user.model";
import {AngularFireStorage, AngularFireStorageModule} from "@angular/fire/compat/storage";


@Injectable({ providedIn: 'root' })

export class UserService {

  // TODO:
  // - Controlar los errores cuando los formularios de regisdtro e inicio sesión
  // no tiene coincidencias
  // - Crear el componente del perfil
  // - Usuario Admin y formularios del Admin
  // - Demostrar el efecto de Real Time al cambiar valores de usuarios

  private dbUsersPath = '/users';
  UsersRefList: AngularFireList<User>;

  constructor(
    private db: AngularFireDatabase,
    private dbImg: AngularFireStorage,
  ) {
    this.UsersRefList = db.list(this.dbUsersPath);
  }

  createUpdateUser(user: User){
    return this.db.database.ref(this.dbUsersPath + "/" + user.uid).set(user);
  }

  retrieveUser(uid: string): Promise<any>{
    return this.db.database.ref(this.dbUsersPath + "/" + uid).get();
  }

  retrieveProfileImgUser(uid: string) {
    return this.dbImg.storage.ref('user_images/' + uid).getDownloadURL();

  }

}
