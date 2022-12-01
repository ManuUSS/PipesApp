import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/sales.interfaces";


@Pipe({
    name: "fly"
})
export class FlyPipe implements PipeTransform {

  transform( value: boolean ): string {
    return (value) ? 'vuela' : 'no vuela';
  }

}