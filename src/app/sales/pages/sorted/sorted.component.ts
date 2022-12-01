import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sorted',
  templateUrl: './sorted.component.html'
})
export class SortedComponent {

  public onUpperCase : boolean = true;

  public heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.azul
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.verde
    },
    {
      name: 'Aquaman',
      fly: false,
      color: Color.azul
    },
    {
      name: 'Flash',
      fly: true,
      color: Color.rojo
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.negro
    },
    {
      name: 'Victor',
      fly: true,
      color: Color.negro
    }
  ];

  public orderBy: string = '';

  public changeCase = ():void => {
    this.onUpperCase = !this.onUpperCase;
  }

  changeOrder = ( value: string ): void => {
    this.orderBy = value;
  }

}
