import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContentService} from "../../../services/content.service";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  @Input()
  name: String;
  items: Observable<any[]>;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.items = this.contentService.getCatalogoSeries();
  }

}
