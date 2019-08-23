import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presentacion-posiciones',
  templateUrl: './presentacion-posiciones.component.html',
  styleUrls: ['./presentacion-posiciones.component.scss'],
})
export class PresentacionPosicionesComponent implements OnInit {

  @Input()tituloPosicion: string;
  @Input()url: string;
  @Input()nombreClasificacion: string;

  constructor() { }

  ngOnInit() {
  }

}
