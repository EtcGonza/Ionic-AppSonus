import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
})
export class FabButtonComponent implements OnInit {

  @Input()rutaDinamica: string;
  @Input()home: boolean;
  @Input()side: string;
  @Input()back: boolean;
  @Input()tipoInstrumento: string;
  @Input()slot: string;

  constructor(private navigate: NavController) {
    this.home = false;
    this.side = 'bottom';
    this.rutaDinamica = 'home';
    this.back = true;
  }

  ngOnInit() {}

  toHome() {
    this.navigate.navigateBack('/home');
  }

  toDinamica() {
    this.navigate.navigateBack(`/${this.rutaDinamica}/${this.tipoInstrumento}`);
  }

}
