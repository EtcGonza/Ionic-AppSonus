import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})

export class ImagenModalPage implements OnInit {

  imagen;

  constructor(private modal: ModalController, private navparams: NavParams) { 
   this.imagen = this.navparams.get('imagen');
  }

  ngOnInit() {
  }

  cerrarModal() {
    this.modal.dismiss();
  }

}
