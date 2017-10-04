import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppPieComponent } from './app-pie/app-pie.component';
import { ImpresoraComponent } from './impresora/impresora.component';

@NgModule({
  declarations: [AppComponent, AppPieComponent, ImpresoraComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
