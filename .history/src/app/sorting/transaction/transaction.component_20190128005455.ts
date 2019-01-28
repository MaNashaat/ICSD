import { Component, OnInit, ViewChild } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { TransactionService } from './transaction.service';
import { Subject, Subscription } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Transaction } from './transaction';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer/customer';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../customer/customer.service';

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

  set Cour(val: Customer) {
    if (val != null && val !== undefined) {
      this.item.Courier = val;
    }
  }
  get Cour() {
    return this.item.Courier;
  }

  set Cust(val: Customer[]) {
    if (val != null && val !== undefined) {
      this.item.Customers = val;
    }
  }
  get Cust() {
    return this.item.Customers;
  }

  constructor(
    public patterns: PatternsService,
    private _Service: TransactionService,
    private _CustomerService: CustomerService) {}

  ngOnInit(): void {
    this.CourierLstSub = this._CustomerService.getItemsSimple(0).subscribe(result => (this.CourierLst = result));
    this.CustomerLstSub = this._CustomerService.getItemsSimple(1).subscribe(result => (this.CustomerLst = result));
  }
}
