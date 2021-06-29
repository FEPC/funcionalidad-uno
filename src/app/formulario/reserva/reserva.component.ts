import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html'
})
export class ReservaComponent {
  resp: String = 'No';

  cambioRespuesta(){
    this.resp == 'No' ? this.resp = 'Si' : this.resp = 'No';
  }
}
