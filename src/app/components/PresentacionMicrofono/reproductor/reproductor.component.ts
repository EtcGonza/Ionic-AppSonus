import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss'],
})

export class ReproductorComponent implements OnInit {

  @Input()url: string;

  constructor() { }

  ngOnInit() {}

}
