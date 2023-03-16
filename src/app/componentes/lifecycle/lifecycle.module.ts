import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { PadreComponent } from './ngonchanges/padre/padre.component';
import { HijoComponent } from './ngonchanges/hijo/hijo.component';
import { DoCheckParentComponent } from './ngdocheck/do-check-parent/do-check-parent.component';
import { DoCheckChildComponent } from './ngdocheck/do-check-child/do-check-child.component';
import { AfterContentInitChildComponent } from './aftercontentinit/after-content-init-child/after-content-init-child.component';
import { AfterContentInitParentComponent } from './aftercontentinit/after-content-init-parent/after-content-init-parent.component';
import { ChildComponent } from './aftercontentinit/child/child.component';




@NgModule({
  declarations: [
    
    PadreComponent,
    HijoComponent,
    DoCheckParentComponent,
    DoCheckChildComponent,
    AfterContentInitChildComponent,
    AfterContentInitParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutsModule,
  ]
})
export class LifecycleModule { }
