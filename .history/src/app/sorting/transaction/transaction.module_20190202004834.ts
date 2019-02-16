import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { PageHeaderModule } from 'src/app/shared';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgbTypeaheadModule, NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AutocompleteModule } from 'ng2-input-autocomplete';

@NgModule({
  declarations: [TransactionComponent, TransactionListComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TransactionRoutingModule,
    DataTablesModule,
    PageHeaderModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    AutocompleteModule,
    NgbTypeaheadModule.forRoot(),
    NgbDatepickerModule.forRoot(),
    NgbModalModule
  ]
})
export class TransactionModule {}
