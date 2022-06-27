import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = ''): Heroe[] {
    switch (orderBy) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name) ? 1 : -1)

      case 'flight':
        return heroes.sort((a, b) => (a.side > b.side) ? -1 : 1)

      case 'color':
        return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1)

      default:
        return heroes
    }

  }

}
