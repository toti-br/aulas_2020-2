import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module'; 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
