import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContentService} from "../../../services/content.service";

@Component({
  selector: 'app-bottom-box',
  templateUrl: './bottom-box.component.html',
  styleUrls: ['./bottom-box.component.css']
})
export class BottomBoxComponent implements OnInit {

  @Input()
  name: string;
  items: Observable<any[]>;
  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    switch (this.name) {
      case 'Próximos estrenos': {
        this.items = this.contentService.getERMovies();
        break;
      }
      case 'Series más criticadas': {
        this.items = this.contentService.getMCSeries();
        break;
      }
      case 'Películas de estreno': {
        this.items = this.contentService.getEMovies();
        break;
      }
      case 'Canciones destacadas': {
        this.items = this.contentService.getDMusic();
        break;
      }
    }
  }

}
