import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {map, Observable, of} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private db: AngularFireDatabase) {}

  content: Observable<any>;
  getERMovies() {
    this.content = this.db.object('EstrenoRetrasadosMovies').valueChanges();
    return this.content;
  }
  getEMovies() {
    this.content = this.db.object('EstrenosMovies').valueChanges();
    return this.content;
  }
  getDMusic() {
    this.content = this.db.object('DestacadoMusic').valueChanges();
    return this.content;
  }
  getMCSeries() {
    this.content = this.db.object('MasCriticadoSeries').valueChanges();
    return this.content;
  }
  getMCMovies() {
    this.content = this.db.object('MasCriticadoMovies').valueChanges();
    return this.content;
  }
  getMCPodcasts() {
    this.content = this.db.object('MasCriticadoPodcasts').valueChanges();
    return this.content;
  }
  getMCMusic() {
    this.content = this.db.object('MasCriticadoMusic').valueChanges();
    return this.content;
  }

  getCatalogoMusic(){
    this.content = this.db.object('MusicList').valueChanges();
    return this.content;
  }

  getCatalogoMovies(){
    this.content = this.db.object('MovieList').valueChanges();
    return this.content;
  }

  getCatalogoSeries(){
    this.content = this.db.object('SeriesList').valueChanges();
    return this.content;
  }

  getCatalogoPodcast(){
    this.content = this.db.object('PodcastList').valueChanges();
    return this.content;
  }


}
