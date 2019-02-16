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
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AutocompleteModule } from 'ng2-input-autocomplete';
<<<<<<< HEAD
=======
import { VarDirective } from 'src/app/shared/directives/variable.directive';
>>>>>>> 47aa3762b63201519153c39c42695b5ab12e326b

@NgModule({
  declarations: [TransactionComponent, TransactionListComponent, VarDirective],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TransactionRoutingModule,
    DataTablesModule,
    PageHeaderModule,
    AngularMultiSelectModule,
    AutocompleteModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    NgbTypeaheadModule.forRoot(),
    NgbDatepickerModule.forRoot(),
    NgbModalModule
  ]
})
export class TransactionModule {}
