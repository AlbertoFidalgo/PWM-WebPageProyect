import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CatalogueService} from '../../services/catalogue.service';
import {GenresService} from '../../services/genres.service';
import {ImagesService} from '../../services/images.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  public genreId: string;
  public typeId: string;
  public content: Observable<any[]>;
  public genres: Observable<any>;
  public element: Observable<any>;
  public filtro: Observable<any>;

  constructor(route: ActivatedRoute,
              private catalogueService: CatalogueService,
              private genreService: GenresService,
              private imageService: ImagesService) {
    route.params.subscribe((params) => {
      this.typeId = params.type;
      this.genreId = params.genre;
      this.loadData();
      this.loadGenres();
    });
    this.getImage();
  }

  ngOnInit(): void {
  }

  getImage() {
    this.filtro = this.imageService.getImage('assets/filtroIcon.png');
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

  loadGenres() {
    switch (this.typeId) {
      case 'Música': {
        this.genres = this.genreService.getMusicGenres();
        break;
      }
      case 'Series': {
        this.genres = this.genreService.getSeriesGenres();
        break;
      }
      case 'Películas': {
        this.genres = this.genreService.getMoviesGenres();
        break;
      }
    }
  }
}
