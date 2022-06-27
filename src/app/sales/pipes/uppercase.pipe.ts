import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'uppercaseCustom'
})

export class UppercasePipe implements PipeTransform {

    //es la funcion  que hace el tabajo
    transform(valor: string, isUpper: boolean = true): string {
        // if (isUpper) {
        //     return valor.toUpperCase()

        // } else {
        //     return valor.toLocaleLowerCase()

        // }

        return (isUpper)
            ? valor.toUpperCase()
            : valor.toLocaleLowerCase()
    }

}