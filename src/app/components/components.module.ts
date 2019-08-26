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
import { TituloHeaderComponent } from './titulo-header/titulo-header.component';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { SlidesComponent } from './slides/slides.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria/galeria.component';

@NgModule({
  declarations: [
    MenuComponent,
    TarjetaInstrumentoComponent,
    PresentacionTarjetasComponent,
    BotonMicrofonoComponent,
    SlidesComponent,
    ReproductorComponent,
    PipeCloudPipe,
    ContactoComponent,
    PresentacionPosicionesComponent,
    PresentacionMicrofonoComponent,
    TituloHeaderComponent,
    FabButtonComponent,
    FooterComponent,
    GaleriaComponent
  ],
  exports: [
    MenuComponent,
    PresentacionTarjetasComponent,
    BotonMicrofonoComponent,
    PresentacionMicrofonoComponent,
    FabButtonComponent,
    SlidesComponent,
    ContactoComponent,
    FooterComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule, IonicModule
  ]
})
export class ComponentsModule { }
