import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  genres: Observable<any>;
  constructor(private db: AngularFireDatabase) { }

  getMusicGenres () {
    this.genres = this.db.object('MusicGenres').valueChanges();
    return this.genres;
  }
  getMoviesGenres () {
    this.genres = this.db.object('MovieGenres').valueChanges();
    return this.genres;
  }
  getSeriesGenres () {
    this.genres = this.db.object('SeriesGenres').valueChanges();
    return this.genres;
  }
}
