import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamientos',
  templateUrl: './pensamientos.component.html',
  styleUrls: ['./pensamientos.component.css']
})
export class PensamientosComponent implements OnInit {
  pensamientos: Array<string>;
  sName: string;
  // aElementos: string[]
  constructor() { }

  ngOnInit() {
    this.pensamientos = [ ];
  }
  addPensamiento(pensamiento: string) {
    this.pensamientos.push(pensamiento);
    // si tenemos enlazados podemos meterlo así.
    // this.pensamientos.push(this.sName);
    this.sName = '';
  }

}
