import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


const app_routes: Routes = [

];

@NgModule({
  declarations: [


    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(app_routes)
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    RouterModule
  ]
})
export class LayoutsModule { }
