import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NuevoEstadoComponent } from '../componentes/estados/nuevo-estado/nuevo-estado.component';
import { ListadoEstadoComponent } from '../componentes/estados/listado-estado/listado-estado.component';
import { ProductListComponent } from '../pruebalo/components/product-list/product-list.component';
import { ProductDetailsComponent } from '../pruebalo/components/product-details/product-details.component';


const app_routes: Routes = [
  { path: 'home', component: NuevoEstadoComponent },
  // { path: 'nuevo-estado', component: NuevoEstadoComponent },
  { path: 'listado-estado', component: ListadoEstadoComponent },
  { path: 'pruebelo', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent }, // mostrar el detalle del producto
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

// Un módulo es una forma de organizar componentes e inclusive otros módulos
@NgModule({// Decorador de la clase
  // Los componentes, directivas, y pipes que pertenecen a este NgModule.
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  // importar la funcionalidad que se exporta desde otros NgModules
  imports: [
    CommonModule,
    RouterModule.forRoot(app_routes,{
      /**
       * Indicarle a los navegadores que después del # no es un directorio ni sitio web sino que hace parte de la ruta del index.html que
       * se encuentra en esa dirección, con el fin de poder desplegar en servidores donde no se tiene acceso al .htaccess
       */
      useHash:true // se le indica a la aplicación 
    })
  ],
  // exportar la funcionalidad seleccionada para que la utilicen otros NgModules.
  exports: [
    NavbarComponent,
    FooterComponent,
    RouterModule
  ],
  // Creadores de servicios que este NgModule aporta a la colección global de servicios; se vuelven accesibles en todas las partes de la aplicación. 
  //(También puedes especificar proveedores a nivel de componente, que a menudo es preferido).
  providers:[]
})
export class LayoutsModule { }
