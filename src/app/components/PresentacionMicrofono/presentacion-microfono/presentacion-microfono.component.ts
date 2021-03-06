import { Component, OnInit, Input } from '@angular/core';
import { Microfono } from '../../../interfaces/interfaceMicrofonos';
import { ApiService } from '../../../services/api.service';
import { SoundCloudService } from '../../../services/sound-cloud.service';

@Component({
  selector: 'app-presentacion-microfono',
  templateUrl: './presentacion-microfono.component.html',
  styleUrls: ['./presentacion-microfono.component.scss'],
})

export class PresentacionMicrofonoComponent implements OnInit {

  Microfono: Microfono;

  slideOpts = {
    slidesPerView: 1.2,
    freeMode: false
  };

  constructor(private apiService: ApiService, private cloudService: SoundCloudService) { }

  ngOnInit() {

    this.Microfono = this.apiService.getObjMic();
    this.Microfono.posiciones = this.cloudService.posicionesInyectadas(this.Microfono.posiciones);
    console.log('PRESENTANDO MICROFONO', this.Microfono);

  }

}
