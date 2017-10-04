import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { ListadoComponent } from './listado/listado.component';
import { PensamientosComponent } from './pensamientos/pensamientos.component';

@NgModule({
  declarations: [
    AppComponent,
    Formulario1Component,
    Formulario2Component,
    ListadoComponent,
    PensamientosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
