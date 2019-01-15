import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SortingRoutes } from './sorting.routing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(SortingRoutes),
    FormsModule
  ],
  declarations: [
  ],
  entryComponents: [
  ]
})

export class SortingModule { }
