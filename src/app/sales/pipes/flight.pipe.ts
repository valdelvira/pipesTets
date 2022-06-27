import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'flightPipe'
})

export class FlightPipe implements PipeTransform {

    //es la funcion  que hace el tabajo
    transform(valor: boolean): string {


        return (valor)
            ? 'flight'
            : 'doesnt flight'
    }

}