import { Component, OnInit } from '@angular/core';
import {Provincia, ProvinciaClas} from '../modelo/modelos';
import {Impresora} from '../modelo/modelos';

@Component({
  selector: 'app-impresora',
  templateUrl: './impresora.component.html',
  styleUrls: ['./impresora.component.css']
})
export class ImpresoraComponent  {


  sName: string;
  
    aImpresoras: Array<string> = ['HP Pagewide Pro 477dw',
                                'Epson Stylus SX235W',
                                'Lexmark CS310/410',
                                'Brother HL-3140CW'];
  
    aProvincias: Array<Provincia> = [
      {idProvincia: 2, nombre: 'Castellón'},
      {idProvincia: 3, nombre: 'Alicante'},
      {idProvincia: 1, nombre: 'Valencia' },
      {idProvincia: 7, nombre: 'Teruel'},
      {idProvincia: 5, nombre: 'Tarragona'}
    ];
  
    impresoraSeleccionada: string;
    provinciaSeleccionada: Provincia = {idProvincia: 0, nombre: ''};
    provinciaC: ProvinciaClas = new ProvinciaClas(0, 'javastyle constructor');
    print: boolean = false;	// true si se selecciona imprime
    isClaro: boolean = false; // true si se selecciona claro
    mostrarFinal: boolean = false;
  
    avisarPrint = () => {
      console.log('Modificada la opción de imprimir con valor :' + this.print);
    }
  
    avisarProvincia = () => {
      this.mostrarFinal = true;
      console.log('Provincia Seleccionada');
      console.dir(this.provinciaSeleccionada);
    }

}
