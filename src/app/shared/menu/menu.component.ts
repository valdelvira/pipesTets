import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = []
  constructor() {
    this.items = [
      {
        label: 'Angular\'s Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts and Dates',
            icon: 'pi pi-allign-left',
            routerLink: '/'
          },
          {
            label: 'Numer',
            icon: 'pi pi-dollar',
            routerLink: '/numbers'
          },
          {
            label: 'Not commons',
            icon: 'pi pi-globe',
            routerLink: '/not-commons'
          },
        ]
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
      },
    ];

  }

  ngOnInit(): void {
  }

}
