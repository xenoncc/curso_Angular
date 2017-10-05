import { Injectable } from '@angular/core';
import { LIBROS } from './mock-libros';

@Injectable()
export class BuscarLibrosService {

  private aLibros = LIBROS;

  constructor() { }

  getLibros(filtro: string) {
    return this.aLibros.filter((s) => s.indexOf(filtro) > 0);
  }

}
