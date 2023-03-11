import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ShippingComponent } from './components/shipping/shipping.component';


/**
 * Módulo en donde se realiza todo el ejercicio propusto en la documentación de angular en la sección: Getting started->Try it
 */
@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  imports: [
    CommonModule,
    LayoutsModule,
  ]
})
export class PruebaloModule { }
