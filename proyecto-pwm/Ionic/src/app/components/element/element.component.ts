import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CatalogueService} from '../../services/catalogue.service';
import {GenresService} from '../../services/genres.service';
import {ImagesService} from '../../services/images.service';
import {FavoriteService} from '../../services/favorite.service';
import {AuthService} from '../../services/user.auth.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  public typeId: string;
  public titleId: string;
  public content: Observable<any[]>;
  public user: Observable<any>;
  private key: number = 0;
  constructor(route: ActivatedRoute,
              private catalogueService: CatalogueService,
              private genreService: GenresService,
              private imageService: ImagesService,
              private favoritesService: FavoriteService,
              private authService: AuthService) {
    route.params.subscribe((params) => {
      this.typeId = params.type;
      this.titleId = params.element;
      this.loadData();
    });
    this.getImage();
  }

  ngOnInit(): void {
  }

  async addFav(title: string, poster: string) {
    await this.favoritesService.init();
    await this.favoritesService.openStore(this.userSigned.uid);
    while (await this.favoritesService.isKey(this.key.toString())) {
      this.key++;
    }
    const values = await this.favoritesService.getAllKeysValues();
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < values.length; i++) {
      let obj = JSON.parse(values[i].value);
      if (title === obj.title) {
        console.log('Esta contenido');
        return;
      }
    }
    let data: any = {'title':title, 'poster':poster};
    await this.favoritesService.setItem(this.key.toString(), JSON.stringify(data));
    console.log(this.favoritesService.getAllKeysValues());
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get userSigned(){
    return this.authService.userInfoLogged;
  }

  getImage() {
    this.user = this.imageService.getImage('assets/user.png');
  }

  loadData() {
    switch (this.typeId) {
      case 'Música': {
        this.content = this.catalogueService.getContentMusic();
        break;
      }
      case 'Series': {
        this.content = this.catalogueService.getContentSeries();
        break;
      }
      case 'Películas': {
        this.content = this.catalogueService.getContentMovies();
        break;
      }
    }
  }
}
