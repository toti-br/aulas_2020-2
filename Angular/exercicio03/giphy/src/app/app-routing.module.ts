import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsComponent } from './gifs/gifs.component';
import { BuscarComponent } from './buscar/buscar.component';

const routes: Routes = [
	{ path: '', component: BuscarComponent },
	{ path: 'resultados/:q', component: GifsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }