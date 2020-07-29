import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    NgclassComponent,
    NgcontentComponent,
    NgstyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
