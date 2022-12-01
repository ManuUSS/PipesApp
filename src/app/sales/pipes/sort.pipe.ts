import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform( heroes: Heroe[]): Heroe[] {
    heroes = heroes.sort( (a, b) => ( a.name > b.name ) ? 1 : -1 );
    return heroes;
  }

}
