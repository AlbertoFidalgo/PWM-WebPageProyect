import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../../services/catalogue.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  public genreId: String;
  public typeId: String;
  public content: Observable<any[]>;

  constructor(route: ActivatedRoute, private catalogueService: CatalogueService) {
    route.params.subscribe((params) => {
      this.genreId = params["genre"];
      this.typeId = params["type"];
    });
  }

  ngOnInit(): void {
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
