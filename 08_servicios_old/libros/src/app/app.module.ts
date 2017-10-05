import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {} from './buscar.'

import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
