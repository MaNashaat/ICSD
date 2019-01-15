import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SortingComponent } from './sorting.component';
import { HeaderComponent } from '../layout/components/header/header.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { LayoutComponent } from '../layout/layout.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    SortingComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent
  ],
  entryComponents: [
  ]
})

export class SortingModule { }
