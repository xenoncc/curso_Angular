import { Component, Input, Output, EventEmitter , OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input()
  public usuario: string;
  @Output()
  public borrar: EventEmitter<any>;

  constructor() {
    // poner esto aquí antes de ngOnInit. porque si no falla. o se hace (instacia en la declaración
    this.borrar = new EventEmitter<any>();
  }

  ngOnInit() {

  }

  btnBorrar() {
    this.borrar.emit();
  }

}
