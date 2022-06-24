import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  //i18nSelect
  name: string = 'Mary'
  sex: string = 'Fem'

  sexMap = {
    'Fem': 'her',
    'Mas': 'his'
  }
  //i18nPlural
  clients: string[] = ['Mary', 'Ann', 'James']
  clientsMap = {
    '=0': ' null',
    '=1': ' one client',
    'other': ' many # clients'
  }

  changeClient() {
    if (this.sex = 'Fem') {
      this.sex = 'Mas'
      this.name = 'Paco'
    } else {
      this.sex = 'Fem'
      this.name = 'Mary'
    }
  }

  deleteClient() {
    this.clients.pop()
  }
  // KeyValue Pipe
  person = {
    name: 'Jhon',
    age: 35,
    address: 'Ottawa'
  }

  //Async Pipe, se subscribe internamente a la funcion
  counterObser = interval(1000)

  valuePromise = new Promise((resolve, rejeect) => {
    setTimeout(() => resolve('Bingo!'), 3500)
  })

}
