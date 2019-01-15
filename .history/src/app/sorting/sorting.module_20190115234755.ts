import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { CitiesComponent } from './city/city.component';
import { OrganizationComponent } from './organization/organization.component';
import { AreasComponent } from './area/area.component';
import { VendorComponent } from './Vendor/Vendor.component';
import { CustomerComponent } from './Customer/customer.component';
/* import { PODComponent } from './POD/POD.component'; */


import { SortingRoutes } from './sorting.routing';
import { FullscreenTableComponent } from '../views/tables/../tables/fullscreen-table/fullscreen-table.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';


import { NgxTablePopupComponent } from './country/ngx-table-popup/ngx-table-popup.component';
import { OrganizationTablePopupComponent } from './organization/Organization-table-popup/organization-table-popup.component';
import { CityTablePopupComponent } from './city/city-table-popup/city-table-popup.component';
import { AreaTablePopupComponent } from './area/area-table-popup/area-table-popup.component';
import { VendorTablePopupComponent } from './Vendor/vendor-table-popup/vendor-table-popup.component';
import { ShipmentTablePopupComponent } from './shipment/shipment-table-popup/shipment-table-popup.component';
import { CustomerTablePopupComponent } from './Customer/customer-table-popup/customer-table-popup.component';

import {
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatProgressBarModule,
  MatSelect,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { DataTableModule, DataGridModule  } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import {DropdownModule , CalendarModule} from 'primeng/primeng';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../shared/shared.module';
import { CrudNgxTableComponent } from '../views/cruds/crud-ngx-table/crud-ngx-table.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { UploadShipmentsComponent } from './shipment/upload-shipments/upload-shipments.component';
import { TransactionComponent } from './transaction/transaction.component';
 import { PODComponent } from './POD/POD.component';
 import {SelectModule} from 'ng2-select';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxDatatableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    FormsModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    SharedModule,
    MatAutocompleteModule,
    MatSelectModule,
    FileUploadModule,
    RouterModule.forChild(SortingRoutes),
    FormsModule,
    DataTableModule,
    DataGridModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    SelectModule

  ],
  declarations: [
    CountryComponent,
    CitiesComponent,
    OrganizationComponent,
    AreasComponent,
    VendorComponent,
    ShipmentComponent,
    TransactionComponent,
    CustomerComponent,
    PODComponent,
    FullscreenTableComponent,
    CrudNgxTableComponent,
    NgxTablePopupComponent,
    OrganizationTablePopupComponent,
    CityTablePopupComponent,
    AreaTablePopupComponent,
    VendorTablePopupComponent,
    ShipmentTablePopupComponent,
    CustomerTablePopupComponent,
    UploadShipmentsComponent
  ],
  entryComponents: [
    NgxTablePopupComponent,
    OrganizationTablePopupComponent,
    CityTablePopupComponent,
    AreaTablePopupComponent,
    VendorTablePopupComponent,
    ShipmentTablePopupComponent,
    CustomerTablePopupComponent,
    UploadShipmentsComponent
  ]
})

export class SortingModule { }
