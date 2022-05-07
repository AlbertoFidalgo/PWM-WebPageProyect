import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-home-box2',
  templateUrl: './mobile-home-box2.component.html',
  styleUrls: ['./mobile-home-box2.component.css']
})
export class MobileHomeBox2Component implements OnInit {

  @Input()
  name: String;
  constructor() {
  }

  ngOnInit(): void {
  }

}
