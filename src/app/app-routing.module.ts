import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumesComponent } from './albumes/albumes.component';
import { HistoriaComponent } from './historia/historia.component';
import { HomeComponent } from './home/home.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'historia',
    component:HistoriaComponent
  },
  {
    path:'integrantes',
    component:IntegrantesComponent
  },
  {
    path:'albumes',
    component:AlbumesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
