import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContentService} from "../../../services/content.service";

@Component({
  selector: 'app-mobile-home-box1',
  templateUrl: './mobile-home-box1.component.html',
  styleUrls: ['./mobile-home-box1.component.css']
})
export class MobileHomeBox1Component implements OnInit {

  @Input()
  name: String;
  items: Observable<any[]>;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    switch (this.name) {
      case "Próximos estrenos": {
        this.items = this.contentService.getERMovies();
        break;
      }
      case "Series más criticadas": {
        this.items = this.contentService.getMCSeries();
        break;
      }
      case "Películas de estreno": {
        this.items = this.contentService.getEMovies();
        break;
      }
      case "Canciones destacadas": {
        this.items = this.contentService.getDMusic();
        break;
      }
    }
  }
}
