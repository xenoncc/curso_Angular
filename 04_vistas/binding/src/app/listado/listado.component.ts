import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  aElementos: Array<string>;
  // aElementos: string[]
  constructor() { }

  ngOnInit() {
    this.aElementos = [ 'a', 'b', 'c', 'd'];
  }

}
