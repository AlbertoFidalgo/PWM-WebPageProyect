import {Component, Input, OnInit} from '@angular/core';
import {ContentService} from "../../../services/content.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  @Input()
  name: String;
  items: Observable<any[]>;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.items = this.contentService.getCatalogoMusic();
  }

}
