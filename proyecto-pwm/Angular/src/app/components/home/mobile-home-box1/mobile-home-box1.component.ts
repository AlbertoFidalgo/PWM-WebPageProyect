import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-home-box1',
  templateUrl: './mobile-home-box1.component.html',
  styleUrls: ['./mobile-home-box1.component.css']
})
export class MobileHomeBox1Component implements OnInit {

  @Input()
  name: String;
  constructor() {
  }

  ngOnInit(): void {
  }

}
