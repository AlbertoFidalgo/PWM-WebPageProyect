import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private db: AngularFireStorage) {
  }

  getImage(path: string) {
    return this.db.ref(path).getDownloadURL();
  }

  uploadUserImage(uid: string, fileName: string, file: any) {
    return this.db.ref('user_images/' + uid + '/' + fileName).put(file);
  }

}
