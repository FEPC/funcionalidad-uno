import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaComponent } from './reserva/reserva.component';



@NgModule({
  declarations: [
    ReservaComponent
  ],
  exports : [
    ReservaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormularioModule { }
