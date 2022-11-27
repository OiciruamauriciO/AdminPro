import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
})
export class IncrementadorComponent implements OnInit {

  valorNuevoValor: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input('valor') progreso: number = 50;
  //@Input() progreso: number = 50;
  @Input() btnClass: string = 'btn-info';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  /*   get getPorcentaje(){    
    return `${ this.progreso }%`;
  } */

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.progreso = 100;
      this.valorSalida.emit( this.progreso );
      return;
    } else if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      this.valorSalida.emit( this.progreso );
      return;
    } else {
      this.progreso = this.progreso + valor;
      this.valorSalida.emit( this.progreso );
      return;
    }
  }

  onChange(nuevoValor: number){

    this.valorNuevoValor = nuevoValor;

    if (nuevoValor >= 100) {
      this.progreso=100;
    } else if (nuevoValor <= 0) {
      this.progreso=0;
    } else {
      this.progreso=nuevoValor;
    }
    this.valorSalida.emit(this.progreso);

    
  }
}
