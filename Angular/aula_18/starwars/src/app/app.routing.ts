import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonagensComponent } from './componentes/personagens/personagens.component';
import { PersonagemComponent } from './componentes/personagem/personagem.component';
import { PlanetasComponent } from './componentes/planetas/planetas.component';
import { HomeComponent } from './componentes/home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagens', component: PersonagensComponent },
    { path: 'personagem/:id', component: PersonagemComponent },
    { path: 'planetas', component: PlanetasComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);