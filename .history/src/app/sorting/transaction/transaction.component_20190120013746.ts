import { Component, OnInit } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { TransactionService } from './transaction.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Transaction } from './transaction';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.scss']
  })
  export class TransactionComponent implements OnInit {

    ngOnInit(): void {
    }

  }
