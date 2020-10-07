import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css']
})
export class GaleriaComponentComponent implements OnInit{
  ngOnInit(): void {
    this.index = 0;
    this.fotoAtual = this.fotos[this.index]
    this.status = `${this.index + 1} de ${this.fotos.length}`
  }

  @Input() titulo: string;
  @Input() fotos: string[];

  fotoAtual: string;
  index: number;
  status: string;

  primeiraFoto() {
    this.index = 0;
    this.fotoAtual = this.fotos[this.index]
    this.status = `${this.index + 1} de ${this.fotos.length}`
  }
}
