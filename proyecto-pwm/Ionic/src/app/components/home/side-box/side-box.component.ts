import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from "../../../services/content.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-side-box',
  templateUrl: './side-box.component.html',
  styleUrls: ['./side-box.component.css']
})
export class SideBoxComponent implements OnInit {

  @Input()
  name: string;
  items: Observable<any[]>;
  constructor(private contentService: ContentService) { }

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
    }
  }

}
