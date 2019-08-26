import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ImagenModalPage } from '../../../pages/imagen-modal/imagen-modal.page';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})

export class GaleriaComponent implements OnInit {

  imagenes = [
    {
    name: 'imagen1',
    path: '/assets/galeria/img1.jpg',
  }, {
    name: 'imagen2',
    path: '/assets/galeria/img2.jpg',
  }, {
    name: 'imagen3',
    path: '/assets/galeria/img3.jpg',
  }, {
    name: 'imagen4',
    path: '/assets/galeria/img4.jpg',
  }, {
    name: 'imagen5',
    path: '/assets/galeria/img5.jpg',
  }, {
    name: 'imagen6',
    path: '/assets/galeria/img6.jpg',
  }, {
    name: 'imagen7',
    path: '/assets/galeria/img7.jpg',
  }, {
    name: 'imagen8',
    path: '/assets/galeria/img8.jpg',
  }, {
    name: 'imagen9',
    path: '/assets/galeria/img9.jpg',
  }, {
    name: 'imagen10',
    path: '/assets/galeria/img10.jpg',
  }, {
    name: 'imagen11',
    path: '/assets/galeria/img11.jpg',
  }, {
    name: 'imagen12',
    path: '/assets/galeria/img12.jpg',
  }, {
    name: 'imagen13',
    path: '/assets/galeria/img13.jpg',
  }, {
    name: 'imagen14',
    path: '/assets/galeria/img14.jpg',
  }, {
    name: 'imagen15',
    path: '/assets/galeria/img15.jpg',
  }, {
    name: 'imagen16',
    path: '/assets/galeria/img16.jpg',
  }, {
    name: 'imagen17',
    path: '/assets/galeria/img17.jpg',
  }, {
    name: 'imagen18',
    path: '/assets/galeria/img18.jpg',
  }, {
    name: 'imagen19',
    path: '/assets/galeria/img19.jpg',
  }, {
    name: 'imagen20',
    path: '/assets/galeria/img20.jpg',
  }
];

  constructor(private modal: ModalController, private route: NavController) { }

  ngOnInit() {}

  volver() {
    this.route.navigateBack('/home');
  }

  verImagen(imagen) {
    this.modal.create({
      component: ImagenModalPage,
      componentProps: {
        imagen
      }
    }).then(modal => modal.present());
  }

}
