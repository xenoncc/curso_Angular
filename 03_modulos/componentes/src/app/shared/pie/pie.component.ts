import { Component, OnInit } from '@angular/core';
interface Curso {
  formador: string;
  empresa: string;
  fecha: string;
  mifecha?: Date;
}
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  // public formador: string;
  // public empresa: string;
  // public fecha: string;
  curso: Curso;
  constructor() {
   }

  ngOnInit() {
    this.curso = { formador:   'Alejandro Cerezo Lasne', empresa: 'Icono Training Consulting', fecha: '2017' };
    this.curso.mifecha = new Date();
    // this.curso.formador  =   'Alejandro Cerezo Lasne';
    // this.curso.empresa = 'Icono Training Consulting';
    // this.curso.fecha = '2017';
  }

}
