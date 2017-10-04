import { openDeviceNotifications } from 'webdriver-js-extender/built/lib/command_definitions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {
  sName: string;
  
  constructor() { }

  ngOnInit() {
    this.sName = 'Antonio';
  }

  borrar(oEvent: MouseEvent) {
    console.dir(oEvent);
    this.sName = '';
  }
  gimmeName(): String {
    return this.sName;
  }

}
