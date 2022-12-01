import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "uppercase-pipe"
})
export class UppercasePipe implements PipeTransform  {
    transform(value: string): string {
        return value.toUpperCase();
    }
}