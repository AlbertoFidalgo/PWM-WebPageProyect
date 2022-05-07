import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContentService} from "../../../services/content.service";

@Component({
  selector: 'movies-root',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input()
  name: String;
  items: Observable<any[]>;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.items = this.contentService.getCatalogoMovies();
  }

}
