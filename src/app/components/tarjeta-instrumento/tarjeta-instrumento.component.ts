import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tarjeta-instrumento',
  templateUrl: './tarjeta-instrumento.component.html',
  styleUrls: ['./tarjeta-instrumento.component.scss'],
})
export class TarjetaInstrumentoComponent implements OnInit {

  @Input()imgInstrumento: string;
  @Input()tituloInstrumento: string;
  @Input()tipoInstrumento: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // console.log(this.tipoInstrumento);
  }

  navegarListaMicrofonos() {
    // console.log('Hacia', this.tipoInstrumento);
    this.navCtrl.navigateForward(`/lista-microfonos/${this.tipoInstrumento}`);
  }

}
