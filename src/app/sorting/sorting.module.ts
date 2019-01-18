import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule ,Validators} from '@angular/forms';
import { SortingComponent } from './sorting.component';
import { DataTablesModule } from 'angular-datatables';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import { CountryComponent } from './country/country.component';
import { CountryService } from './country/country.service';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  declarations: [
    SortingComponent
    

  ],
  //providers:[CountryService],
  entryComponents: [
  ]
})

export class SortingModule { }
