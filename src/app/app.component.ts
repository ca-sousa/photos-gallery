import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Cachorros';
  fotos = [
    '../assets/dogs/1.jpg',
    '../assets/dogs/2.jpg',
    '../assets/dogs/3.jpg',
    '../assets/dogs/4.jpg',
    '../assets/dogs/5.jpg',
    '../assets/dogs/6.jpg',
  ];
}
