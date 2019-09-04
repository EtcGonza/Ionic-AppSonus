import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ClasificacionMicrofonos } from '../../interfaces/interfaceClasificacionMic';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-microfonos',
  templateUrl: './lista-microfonos.page.html',
  styleUrls: ['./lista-microfonos.page.scss'],
})
export class ListaMicrofonosPage implements OnInit {

  tipoInstrumento: string;
  listaMicrofonos: any[];
  automaticClose = false;
  trayendoData = true;

  constructor(private api: ApiService, private route: ActivatedRoute) {

  this.tipoInstrumento = this.route.snapshot.paramMap.get('tipoInstrumento');

  if (this.tipoInstrumento === 'Bajos') {

      console.log('Solicitando Bajos');

      this.api.getMicsBajos()
      .subscribe( (data: any) => {
        this.listaMicrofonos = data;
        this.listaMicrofonos[0].open = true;
        this.trayendoData = false;
      });

    } else {

      console.log('Solicitando Guitarras');

      this.api.getMicsGuitarras()
      .subscribe( (data: any) => {
        this.listaMicrofonos = data;
        this.listaMicrofonos[0].open = true;
        this.trayendoData = false;
      });
    }

  }

  ngOnInit() {
  }

  guardarMicrofono(index, childIndex) {
    this.api.setObjMic(this.listaMicrofonos[index].microfonos[childIndex]);
  }

  toggleSection(index) {
    this.listaMicrofonos[index].open = !this.listaMicrofonos[index].open;

    if (this.automaticClose && this.listaMicrofonos[index].open) {
      this.listaMicrofonos.filter((item, itemIndex) => itemIndex != index );
    }

  }

  toggleItem(index, childIndex) {
    this.listaMicrofonos[index].microfonos[childIndex].open = !this.listaMicrofonos[index].microfonos[childIndex].open;
  }

}
