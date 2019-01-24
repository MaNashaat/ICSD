import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryService } from './country.service';
import { PatternsService } from '../../shared/services/patterns.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CountryRoutingModule,
    DataTablesModule,
    PageHeaderModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  declarations: [CountryComponent],
  providers: []
})
export class CountryModule {}
