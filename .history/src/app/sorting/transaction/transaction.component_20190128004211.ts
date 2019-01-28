import { Component, OnInit, ViewChild } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { TransactionService } from './transaction.service';
import { Subject, Subscription } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Transaction } from './transaction';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer/customer';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

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
  shipLstSub: Subscription;

  CourierLst: Customer[] = [];
  CourierLstSub: Subscription;
  @ViewChild('Courier') Courier: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  CustomerLst: Customer[] = [];
  CustomerLstSub: Subscription;
  @ViewChild('Customer') Customer: NgbTypeahead;
  Customerfocus$ = new Subject<string>();
  Customerclick$ = new Subject<string>();

  ngOnInit(): void {}
}
