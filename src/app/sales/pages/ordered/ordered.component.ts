import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styles: [
  ]
})
export class OrderedComponent {
  isUpper: boolean = true
  orderBy: string = 'name'
  heroes: Heroe[] = [
    {
      name: 'Superman',
      side: true,
      color: Color.azul
    },
    {
      name: 'Batman',
      side: false,
      color: Color.rojo
    },
    {
      name: 'Robin',
      side: false,
      color: Color.negro
    },
    {
      name: 'Daredevil',
      side: true,
      color: Color.verde
    },
  ]
  changeStatus() {

    this.isUpper = !this.isUpper

  }
  changeOrder(value: string) {
    this.orderBy = value
  }

}
