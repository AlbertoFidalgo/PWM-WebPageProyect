import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private db: AngularFireDatabase) {}

  content: Observable<any>;
  getContentMovies() {
    this.content = this.db.object('MovieList').valueChanges();
    return this.content;
  }
  getContentMusic() {
    this.content = this.db.object('MusicList').valueChanges();
    return this.content;
  }
  getContentSeries() {
    this.content = this.db.object('SeriesList').valueChanges();
    return this.content;
  }
  getContentPodcasts() {
    this.content = this.db.object('MovieList').valueChanges();
    return this.content;
  }
}
