import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderedComponent } from './pages/ordered/ordered.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FlightPipe } from './pipes/flight.pipe';
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderedComponent,
    UppercasePipe,
    FlightPipe,
    OrderPipe
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrderedComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
