import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css']
})
export class GaleriaComponentComponent {
  @Input() titulo: string;
  @Input() fotos: [];
}
