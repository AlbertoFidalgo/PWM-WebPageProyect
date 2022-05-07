import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContentService} from "../../../services/content.service";

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  @Input()
  name: String;
  items: Observable<any[]>;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.items = this.contentService.getCatalogoPodcast();
  }

}
