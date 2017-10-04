export class ProvinciaClas {
    // id: string;//otra manera de hacerlo
    name: string;
    constructor(private id: number, name) {
      this.name = name;
    }
}

export interface Provincia {
    idProvincia: number;
    nombre: string;
  }

export interface Impresora {
      tipo: string;
      modelo: string;
  }


