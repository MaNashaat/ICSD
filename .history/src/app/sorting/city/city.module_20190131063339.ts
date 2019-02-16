import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { CityService } from './city.service';
import { PatternsService } from '../../shared/services/patterns.service';
import { AutocompleteModule } from 'ng2-input-autocomplete';
import { CountryService } from '../country/country.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CityRoutingModule,
    DataTablesModule,
    PageHeaderModule,
    AutocompleteModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  declarations: [CityComponent],
  providers: [CityService, CountryService]
})
export class CityModule {}
