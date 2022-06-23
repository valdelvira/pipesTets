import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  nameLower: string = 'hola'
  nameUpper: string = 'HOLA'
  fullName: string = 'jhon Deer'

  fecha: Date = new Date()


  constructor() { }


}
