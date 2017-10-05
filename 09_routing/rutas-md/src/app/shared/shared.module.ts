import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CabezaComponent } from './cabeza/cabeza.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CabezaComponent, PieComponent, MenuComponent, RouterModule]
  ,
  declarations: [CabezaComponent, PieComponent, MenuComponent, RouterModule]
})
export class SharedModule { }
