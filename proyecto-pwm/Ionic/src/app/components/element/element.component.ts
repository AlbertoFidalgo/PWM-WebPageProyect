import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../../services/catalogue.service";
import {GenresService} from "../../services/genres.service";
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  public typeId: String;
  public titleId: String;
  public content: Observable<any[]>;
  public user: Observable<any>;
  constructor(route: ActivatedRoute,
              private catalogueService: CatalogueService,
              private genreService: GenresService,
              private imageService: ImagesService) {
    route.params.subscribe((params) => {
      this.typeId = params["type"];
      this.titleId = params["element"];
      this.loadData();
    });
    this.getImage();
  }

  ngOnInit(): void {
  }

  getImage () {
    this.user = this.imageService.getImage('assets/user.png')
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
}
