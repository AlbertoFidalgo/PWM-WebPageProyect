import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ImagesService} from '../../../services/images.service';

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.css']
})
export class CarousellComponent implements OnInit {

  carrousel1: Observable<any>;
  carrousel2: Observable<any>;
  carrousel3: Observable<any>;
  carrousel4: Observable<any>;
  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.carrousel1 = this.imagesService.getImage('assets/musicaBanner.png');
    this.carrousel2 = this.imagesService.getImage('assets/peliculasBanner.png');
    this.carrousel3 = this.imagesService.getImage('assets/seriesBanner.png');
    this.carrousel4 = this.imagesService.getImage('assets/podcastsBanner.png');
  }

}
