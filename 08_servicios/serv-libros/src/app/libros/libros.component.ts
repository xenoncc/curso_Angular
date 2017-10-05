import { Component, OnInit } from '@angular/core';
import { BuscarLibrosService } from '../buscar-libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  // array de libros devuelto por el servicio.
  aLibros: string[];
  nombreLibro: string;
  constructor(private serviceBuscarLibros: BuscarLibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  public buscarLibros () {
    this.aLibros = this.serviceBuscarLibros.getLibros(this.nombreLibro);
    console.log(this.aLibros);
  }

}
