import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'lista-microfonos/:tipoInstrumento', loadChildren: './pages/lista-microfonos/lista-microfonos.module#ListaMicrofonosPageModule' },
  { path: 'mostrar-microfono', loadChildren: './pages/mostrar-microfono/mostrar-microfono.module#MostrarMicrofonoPageModule' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'nosotros-slides', loadChildren: './pages/nosotros-slides/nosotros-slides.module#NosotrosSlidesPageModule' },
  { path: 'contacto-menu', loadChildren: './pages/contacto-menu/contacto-menu.module#ContactoMenuPageModule' },
  { path: 'galeria-menu', loadChildren: './pages/galeria-menu/galeria-menu.module#GaleriaMenuPageModule' },
  { path: 'imagen-modal', loadChildren: './pages/imagen-modal/imagen-modal.module#ImagenModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
