import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reto06-Directivas';


  cities = ['Barcelona', 'Madrid', 'Bilbao'];

  name!: string;


}
