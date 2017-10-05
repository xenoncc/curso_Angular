import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { BuscarLibrosService} from './buscar-libros.service';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BuscarLibrosService], // <-- servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
