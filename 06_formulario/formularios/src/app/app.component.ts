import { Component } from '@angular/core';
import {Provincia, ProvinciaClas} from './modelo/modelos';
import {Impresora} from './modelo/modelos';

// Uso de interfaces para definir las propiedades de una clase
// que se utiliza como modelo de datos
// En este caso no se "implementa" el interfaz
// Podría llevarse a un fichhero inedpendiente, exportarse
// y luego importarse en este
/*
export interface Provincia {
  idProvincia: number;
  nombre: string;
}
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
