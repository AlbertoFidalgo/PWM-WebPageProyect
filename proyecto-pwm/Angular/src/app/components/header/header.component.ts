import { Component, OnInit } from '@angular/core';
import {GenresService} from "../../services/genres.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/user.auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  musicGenres: Observable<any>;
  moviesGenres: Observable<any>;
  seriesGenres: Observable<any>;
  podcastsGenres: Observable<any>;

  constructor(private authService: AuthService,
              private genresService: GenresService) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this.musicGenres = this.genresService.getMusicGenres();
    this.seriesGenres = this.genresService.getSeriesGenres();
    this.moviesGenres = this.genresService.getMoviesGenres();
  }

  get userSigned(){
    return this.authService.userInfoLogged;
  }

  get logged(){
    return this.authService.isLogged;
  }

  signOutUser(){
    this.authService.userSignOut()
  }

  reload (path: String) {
    console.log(path);
  }

}
