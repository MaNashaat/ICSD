import { Component, OnInit, ViewChild } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { TransactionService } from './transaction.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Transaction } from './transaction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  @ViewChild('detailsForm')
  public detailsForm: NgForm;
  operation = 'view';
  item: Transaction;
  list: Transaction[];

  ngOnInit(): void {}
}
