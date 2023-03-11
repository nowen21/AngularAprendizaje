import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  
  { path: 'pruebelo', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent }, // mostrar el detalle del producto
];
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
    RouterModule.forRoot(app_routes,{
      /**
       * Indicarle a los navegadores que después del # no es un directorio ni sitio web sino que hace parte de la ruta del index.html que
       * se encuentra en esa dirección, con el fin de poder desplegar en servidores donde no se tiene acceso al .htaccess
       */
      useHash:true // se le indica a la aplicación 
    })
  ]
})
export class PruebaloModule { }
