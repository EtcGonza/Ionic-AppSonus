import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})

export class ContactoComponent implements OnInit {

  constructor(private route: NavController) { }

  ngOnInit() {}

  volver() {
    this.route.navigateBack('/home');
  }
}
