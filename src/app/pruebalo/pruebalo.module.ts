import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


/**
 * Módulo en donde se realiza todo el ejercicio propusto en la documentación de angular en la sección: Getting started->Try it
 */
@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
   
  ]
})
export class PruebaloModule { }
