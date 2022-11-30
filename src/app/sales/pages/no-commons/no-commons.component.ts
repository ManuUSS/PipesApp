import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html'
})
export class NoCommonsComponent {

  public name: string = 'Manuel';
  public gender: string = 'Femenino';
  public invitationMap = {
    'Masculino': 'invitarlo',
    'Femenino': 'invitarla'
  };

  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Manuel'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };
}
