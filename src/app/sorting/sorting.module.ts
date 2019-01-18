import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule ,Validators} from '@angular/forms';
import { SortingComponent } from './sorting.component';
<<<<<<< HEAD
import { DataTablesModule } from 'angular-datatables';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import { CountryComponent } from './country/country.component';
import { CountryService } from './country/country.service';
=======
import { HeaderComponent } from '../layout/components/header/header.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { SortingRoutingModule } from './sorting-routing.module';
import { ShipmentListComponent } from './shipment/shipment-list/shipment-list.component';
>>>>>>> 5eed0eb79c6267c6fa6b022cd0cd20a7ec501e4f



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
<<<<<<< HEAD
    SortingComponent
    

=======
    SortingComponent,
    HeaderComponent,
    SidebarComponent,
    ShipmentListComponent
>>>>>>> 5eed0eb79c6267c6fa6b022cd0cd20a7ec501e4f
  ],
  //providers:[CountryService],
  entryComponents: [
  ]
})

export class SortingModule { }
