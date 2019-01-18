import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover'
import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './area.component';
import { AreaService } from './area.service';
import { PatternsService } from '../../shared/services/patterns.service';
import {AutocompleteModule} from 'ng2-input-autocomplete';
import { CountryService } from '../country/country.service';

@NgModule({
    imports: [ReactiveFormsModule, FormsModule, CommonModule,
        AreaRoutingModule, DataTablesModule, PageHeaderModule,AutocompleteModule,
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger' // set defaults here
          })],
    declarations: [AreaComponent],
    providers:[AreaService,CountryService]
})
export class AreaModule { }