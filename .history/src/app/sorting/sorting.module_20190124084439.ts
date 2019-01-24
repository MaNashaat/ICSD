import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule , Validators} from '@angular/forms';
import { SortingComponent } from './sorting.component';

import { DataTablesModule } from 'angular-datatables';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CountryComponent } from './country/country.component';
import { CountryService } from './country/country.service';

import { HeaderComponent } from '../layout/components/header/header.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { SortingRoutingModule } from './sorting-routing.module';
// import { PODComponent } from './POD/POD.component';
import { TransactionComponent } from './transaction/transaction.component';
// import { ShipmentListComponent } from './shipment/shipment-list/shipment-list.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    SortingRoutingModule
  ],
  declarations: [
    SortingComponent,
    SortingComponent,
    HeaderComponent,
    SidebarComponent,
    // PODComponent,
    TransactionComponent,
    // ShipmentListComponent
  ],
  // providers:[CountryService],
  entryComponents: [
  ]
})

export class SortingModule { }
