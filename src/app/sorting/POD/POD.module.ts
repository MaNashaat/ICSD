import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import { PODRoutingModule } from './POD-routing.module';
import { PODComponent } from './POD.component';
import { PODService } from './POD.service';
import { PatternsService } from '../../shared/services/patterns.service';
import {AutocompleteModule} from 'ng2-input-autocomplete';
import { CountryService } from '../country/country.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
    imports: [ReactiveFormsModule, FormsModule, CommonModule,
        PODRoutingModule, DataTablesModule, PageHeaderModule,AutocompleteModule,AngularMultiSelectModule,   
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger' // set defaults here
          })],
    declarations: [PODComponent],
    providers:[PODService,CountryService]
})
export class PODModule { }