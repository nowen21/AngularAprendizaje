import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
import { TopBarComponent } from './componentes/top-bar/top-bar.component';
import { LayoutsModule } from './layouts/layouts.module';
import { PruebaloModule } from './pruebalo/pruebalo.module';
import { LifecycleModule } from './componentes/lifecycle/lifecycle.module';
import { LoggerService } from './componentes/lifecycle/services/logger.service';



/**
 * Los NgModules son contenedores para un bloque cohesivo de código dedicado a un dominio de aplicación, un flujo de trabajo o un conjunto de capacidades estrechamente 
 * relacionadas. Pueden contener componentes, proveedores de servicios y otros archivos de código cuyo alcance está definido por el NgModule que los contiene.
 * 
 * Un NgModule está definido por una clase decorada con @NgModule(). El decorador @NgModule() es una función que toma un único objeto de metadatos, cuyas propiedades 
 * describen el módulo.
 */
@NgModule({
  // Los componentes, directivas, y pipes que pertenecen a este NgModule.
  declarations: [
    TopBarComponent,
    AppComponent,
    NuevoEstadoComponent,
    ListadoEstadoComponent,
    ListadoTarjetaComponent,
    ListadoTipotarjComponent,
    ListadoTransaccComponent,


  ],
  // Otros módulos cuyas clases exportadas son necesarias para las plantillas de componentes declaradas en este NgModule
  imports: [
    BrowserModule,
    NgbModule,

    DataTablesModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutsModule,
    PruebaloModule,
    LifecycleModule
  ],
  /**
   * Creadores de servicios que este NgModule aporta a la colección global de servicios; se vuelven accesibles en todas las partes de la aplicación. 
   * (También puedes especificar proveedores a nivel de componente, que a menudo es preferido).
   */
  providers: [
    ApiEstadoService,
    LoggerService
  ],
  /**
   * La vista principal de la aplicación, llamado el componente raíz, que aloja todas las demás vistas de la aplicación. Sólo el NgModule raíz debe establecer 
   * la propiedad bootstrap.
  */
  bootstrap: [AppComponent],
  /**
   * El subconjunto de declaraciones que deberían ser visibles y utilizables en las plantillas de componentes de otros NgModules.
   */
  exports: []
})
export class AppModule { }
