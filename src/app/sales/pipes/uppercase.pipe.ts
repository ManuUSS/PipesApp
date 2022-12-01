import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "uppercasepipe"
})
export class UppercasePipe implements PipeTransform  {

    transform( value: string, onUppercase:boolean = true ): string {
        return (onUppercase) ? value.toUpperCase() : value.toLowerCase();
    }
}