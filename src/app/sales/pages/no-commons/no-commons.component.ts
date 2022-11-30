import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html'
})
export class NoCommonsComponent {

  public name: string = 'Manuel';
  public gender: string = 'Masculino';
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

  public person = {
    name: 'Manuel',
    age: 21,
    address: 'San Ramón, Alajuela, Costa Rica'
  };

  public myObservable = interval( 1000 );
  public promiseValue = new Promise( (resolve, reject) => {
    
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  
  });

  public changePerson() {
    this.name = 'María';
    this.gender = 'Femenino';
  }

  public deleteClient() {
    this.clients.pop();
  }
}
