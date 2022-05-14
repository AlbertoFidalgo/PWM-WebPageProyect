import { Component, OnInit } from '@angular/core';
import {GenresService} from "../../services/genres.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/user.auth.service";
import {ImagesService} from "../../services/images.service";

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
  logo: Observable<any>;
  imgProfile: Observable<any>

  constructor(private authService: AuthService,
              private genresService: GenresService,
              private imagesService: ImagesService) {
    this.getImgProfile();
  }

  ngOnInit(): void {
    this.getGenres();
    this.getImage('assets/logo.png');
  }

  getImage(path: string) {
    this.logo = this.imagesService.getImage(path);
  }

  getImgProfile(){
    // TODO no implementado aún...
    console.log('user_images/' + this.userSigned.uid  +  '/' + this.userSigned.imgFile);
    this.imgProfile = this.imagesService.getImage('user_images/' + this.userSigned.uid  +  '/' + this.userSigned.imgFile);
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

    // TODO Dependencia this.authService.userSignOut()

  }


}
