import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { TransactionService } from './transaction.service';
import { Subject, Subscription, Observable, merge } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Transaction } from './transaction';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer/customer';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../customer/customer.service';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit, OnDestroy {
  @ViewChild('detailsForm')
  public detailsForm: NgForm;
  operation = 'view';
  item: Transaction;
  list: Transaction[];
  transLstSub: Subscription;

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

  constructor(public patterns: PatternsService, private _Service: TransactionService, private _CustomerService: CustomerService) {}

  ngOnInit(): void {
    this.item = { ID: 0, TransactionDt: new Date() };
    this.CourierLstSub = this._CustomerService.getItemsSimple(0).subscribe(result => (this.CourierLst = result));
    this.CustomerLstSub = this._CustomerService.getItemsSimple(1).subscribe(result => (this.CustomerLst = result));
  }

  ngOnDestroy(): void {
    this.transLstSub.unsubscribe();
    this.CourierLstSub.unsubscribe();
    this.CustomerLstSub.unsubscribe();
  }

  formatter = (x: { Name: string }) => x.Name;

  searchCour = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.Courier.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term =>
        (term === '' ? this.CourierLst : this.CourierLst.filter(v => v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)
      )
    );
  }

  searchCust = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.Customerclick$.pipe(filter(() => !this.Customer.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term =>
        (term === '' ? this.CustomerLst : this.CustomerLst.filter(v => v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)
      )
    );
  }
}
