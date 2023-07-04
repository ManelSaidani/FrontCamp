import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';import { UserLayoutComponent } from './user-layout.component';
import { UserLayoutRoutes } from './user-layout.routing';
@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(UserLayoutRoutes),
      FormsModule
      // NgbModule
    ],
    declarations: [
     
    ]
  })
  export class UserLayoutModule { }