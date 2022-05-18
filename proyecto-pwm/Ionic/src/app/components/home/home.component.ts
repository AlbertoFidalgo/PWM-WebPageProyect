import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'AngularWebProject';
  sideBox1 = 'Series más criticadas';
  sideBox2 = 'Próximos estrenos';
  bottomBox1 = 'Películas de estreno';
  bottomBox2 = 'Canciones destacadas';
}
