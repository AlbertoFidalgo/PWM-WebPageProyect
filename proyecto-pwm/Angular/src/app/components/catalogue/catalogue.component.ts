import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../../services/catalogue.service";
import {Observable} from "rxjs";
import {GenresService} from "../../services/genres.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  public genreId: String;
  public typeId: String;
  public content: Observable<any[]>;
  public genres: Observable<any[]>;
  public element: Observable<any>;

  constructor(route: ActivatedRoute,
              private catalogueService: CatalogueService,
              private genreService: GenresService) {
    route.params.subscribe((params) => {
      this.typeId = params["type"];
      this.genreId = params["genre"];
      this.loadData();
      this.loadGenres();
    });
  }

  ngOnInit(): void {
  }

  loadData () {
    switch (this.typeId) {
      case "Música": {
        this.content = this.catalogueService.getContentMusic();
        break;
      }
      case "Series": {
        this.content = this.catalogueService.getContentSeries();
        break;
      }
      case "Películas": {
        this.content = this.catalogueService.getContentMovies();
        break;
      }
    }
  }

  loadGenres () {
    switch (this.typeId) {
      case "Música": {
        this.genres = this.genreService.getMusicGenres();
        break;
      }
      case "Series": {
        this.genres = this.genreService.getSeriesGenres();
        break;
      }
      case "Películas": {
        this.genres = this.genreService.getMoviesGenres();
        break;
      }
    }
  }

}
