import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { TarjetaInstrumentoComponent } from './tarjeta-instrumento/tarjeta-instrumento.component';
import { PresentacionTarjetasComponent } from './presentacion-tarjetas/presentacion-tarjetas.component';
import { BotonMicrofonoComponent } from './boton-microfono/boton-microfono.component';
import { ReproductorComponent } from './PresentacionMicrofono/reproductor/reproductor.component';
import { PipeCloudPipe } from '../pipe/pipe-cloud.pipe';
import { PresentacionPosicionesComponent } from './PresentacionMicrofono/presentacion-posiciones/presentacion-posiciones.component';
import { PresentacionMicrofonoComponent } from './PresentacionMicrofono/presentacion-microfono/presentacion-microfono.component';

@NgModule({
  declarations: [
    MenuComponent,
    TarjetaInstrumentoComponent,
    PresentacionTarjetasComponent,
    BotonMicrofonoComponent,
    ReproductorComponent,
    PipeCloudPipe,
    PresentacionPosicionesComponent,
    PresentacionMicrofonoComponent
  ],
  exports: [
    MenuComponent,
    PresentacionTarjetasComponent,
    BotonMicrofonoComponent,
    PresentacionMicrofonoComponent
  ],
  imports: [
    CommonModule, IonicModule
  ]
})
export class ComponentsModule { }
