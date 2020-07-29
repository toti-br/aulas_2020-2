import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { SnakecasePipe } from './snakecase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    SnakecasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
