import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';

import { NuevoEstadoComponent } from './componentes/estados/nuevo-estado/nuevo-estado.component';
import { ListadoEstadoComponent } from './componentes/estados/listado-estado/listado-estado.component';
import { ListadoTarjetaComponent } from './componentes/tarjetas/listado-tarjeta/listado-tarjeta.component';
import { ListadoTipotarjComponent } from './componentes/tipotarjs/listado-tipotarj/listado-tipotarj.component';
import { ListadoTransaccComponent } from './componentes/transaccs/listado-transacc/listado-transacc.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ApiEstadoService } from './servicios/api/api-estado.service';
import { ProductListComponent } from './pruebalo/components/product-list/product-list.component';
import { ProductAlertsComponent } from './pruebalo/components/product-alerts/product-alerts.component';
import { TopBarComponent } from './componentes/top-bar/top-bar.component';
import { ProductDetailsComponent } from './pruebalo/components/product-details/product-details.component';
import { LayoutsModule } from './layouts/layouts.module';



// rutas que se van a manejar en la aplicación
const appRoutes: Routes = [
  { path: '', component: NuevoEstadoComponent },
 // { path: 'nuevo-estado', component: NuevoEstadoComponent },
  { path: 'listado-estado', component: ListadoEstadoComponent },
  { path: 'pruebelo', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent }, // mostrar el detalle del producto
];

@NgModule({
  // registrar los componentes que se creen
  declarations: [
    TopBarComponent,
    AppComponent,
    NuevoEstadoComponent,
    ListadoEstadoComponent,
    ListadoTarjetaComponent,
    ListadoTipotarjComponent,
    ListadoTransaccComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
 
 
    
  ],
  // Liberías que van a utilizar 
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    DataTablesModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutsModule
  ],
  // registar los servicios que se crean
  providers: [ApiEstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
