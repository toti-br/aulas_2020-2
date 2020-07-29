import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakecasePipe } from './../snakecase.pipe';

import { PersonagensComponent } from './personagens/personagens.component';
import { HomeComponent } from './home/home.component';
import { PlanetasComponent } from './planetas/planetas.component';

@NgModule({
  declarations: [
    PersonagensComponent,
    HomeComponent,
    PlanetasComponent,
    SnakecasePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonagensComponent,
    HomeComponent,
    PlanetasComponent,
  ]
})
export class ComponentesModule { }
