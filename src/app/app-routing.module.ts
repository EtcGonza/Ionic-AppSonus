import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'lista-microfonos/:tipoInstrumento', loadChildren: './pages/lista-microfonos/lista-microfonos.module#ListaMicrofonosPageModule' },
  { path: 'mostrar-microfono', loadChildren: './pages/mostrar-microfono/mostrar-microfono.module#MostrarMicrofonoPageModule' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
