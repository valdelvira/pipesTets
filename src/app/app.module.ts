import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

//Cambiar el locale de la app, el nombre lo pongo yo
//con esto consigo registrar idiomas
import localEs from '@angular/common/locales/es'
import localFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs)
registerLocaleData(localFr)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    SalesModule
  ],
  providers: [
    //registro los idioma, si registro mas 
    //coge por defecto el ultimo
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
