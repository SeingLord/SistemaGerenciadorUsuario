import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'escolariedade' })
export class EscolariedadePipe implements PipeTransform {
    transform(id): any {
        console.log(typeof id);
        switch (Number(id)) {
            case 1: return 'Infantil';
            case 2: return 'Fundamental';
            case 3: return 'Médio';
            case 4: return 'Superior';
        }
    }
}