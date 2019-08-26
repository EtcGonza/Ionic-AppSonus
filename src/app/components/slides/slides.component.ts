import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  slides: { img: string, titulo: string, desc: string } [] = [
    {
      img: '/assets/img-slides/warehouse.svg',
      titulo: '¿Quienes Somos?',
      desc: '¡Sonus Fx, Industria Nacional de calidad!'
    },
    {
      img: '/assets/img-slides/waranty.svg',
      titulo: 'Somos Confiables',
      desc: 'Todos nuestros productos tienen hasta 5 años de garantía'
    },
    {
      img: '/assets/img-slides/clock.svg',
      titulo: 'Tenemos trayectoria',
      desc: 'Hace más de 8 años que estamos produciendo para vos'
    },
    {
      img: '/assets/img-slides/concert.svg',
      titulo: 'El sonido ideal',
      desc: 'La atención para poder encontrar tu sonido'
    },
    {
      img: '/assets/img-slides/planet.svg',
      titulo: 'Enviós a donde quieras',
      desc: 'No importa donde estés, nosotros te lo enviamos'
    }

  ];

  constructor(private route: NavController) { }

  ngOnInit() {}

  volver() {
    this.route.navigateBack('/home');
  }

}
