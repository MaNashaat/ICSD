import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { VendorService } from './vendor.service';
import { PatternsService } from '../../shared/services/patterns.service';
import {AutocompleteModule} from 'ng2-input-autocomplete';
import { CountryService } from '../country/country.service';

@NgModule({
    imports: [ReactiveFormsModule, FormsModule, CommonModule,
        VendorRoutingModule, DataTablesModule, PageHeaderModule,AutocompleteModule,
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger' // set defaults here
          })],
    declarations: [VendorComponent],
    providers:[VendorService,CountryService]
})
export class VendorModule { }