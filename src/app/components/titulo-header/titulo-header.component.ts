import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-header',
  templateUrl: './titulo-header.component.html',
  styleUrls: ['./titulo-header.component.scss'],
})
export class TituloHeaderComponent implements OnInit {

  @Input()Titulo: string;

  constructor() { }

  ngOnInit() {}

}
