import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

@NgModule({
  declarations: [TransactionComponent, TransactionListComponent],
  imports: [CommonModule, TransactionRoutingModule]
})
export class TransactionModule {}
