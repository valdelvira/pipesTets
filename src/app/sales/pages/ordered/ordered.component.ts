import { Component } from '@angular/core';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styles: [
  ]
})
export class OrderedComponent {
  isUpper: boolean = true

  changeStatus() {
    debugger
    this.isUpper = !this.isUpper

  }


}
