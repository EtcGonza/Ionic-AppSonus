import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ClasificacionMicrofonos } from '../../interfaces/interfaceClasificacionMic';

@Component({
  selector: 'app-lista-microfonos',
  templateUrl: './lista-microfonos.page.html',
  styleUrls: ['./lista-microfonos.page.scss'],
})
export class ListaMicrofonosPage implements OnInit {

  @Input()tipoInstrumento;

  listaMicrofonos: ClasificacionMicrofonos[];
  automaticClose = false;

  constructor(private api: ApiService) {

    if (this.tipoInstrumento === 'Bajos') {

      // console.log('Solicitando Bajos');
      this.api.getMicsBajos()
      .subscribe( (data: any) => {
        this.listaMicrofonos = data;
        this.listaMicrofonos[0].open = true;
      });

    } else {

      // console.log('Solicitando Guitarras');

      this.api.getMicsGuitarras()
      .subscribe( (data: any) => {
        this.listaMicrofonos = data;
        this.listaMicrofonos[0].open = true;
      });
    }

  }

  ngOnInit() {
  }

  guardarMicrofono(index, childIndex) {
    this.api.setObjMic(this.listaMicrofonos[index].microfonos[childIndex]);
  }

  toggleSection(index){
    this.listaMicrofonos[index].open = !this.listaMicrofonos[index].open;

    if (this.automaticClose && this.listaMicrofonos[index].open) {
      this.listaMicrofonos.filter((item, itemIndex) => itemIndex != index );
    }

  }

  toggleItem(index, childIndex){
    this.listaMicrofonos[index].microfonos[childIndex].open = !this.listaMicrofonos[index].microfonos[childIndex].open;
  }

}
