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
import { routerTransition } from 'src/app/router.animations';
import { ShipmentService } from '../shipment/shipment.service';
import { Shipment } from '../shipment/Shipment';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  animations: [routerTransition()]
})
export class TransactionComponent implements OnInit, OnDestroy {
  @ViewChild('detailsForm')
  public detailsForm: NgForm;
  operation = 'view';
  item: Transaction;
  list: Shipment[];
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

  CourierSettings = {};
  CustomerSettings = {};

  /* set Cour(val: Customer) {
    if (val != null && val !== undefined) {
      this.item.Courier = val;
    }
  }
  get Cour() {
    return this.item.Courier;
  } */

  /* set Cust(val: Customer[]) {
    if (val != null && val !== undefined) {
      this.item.Customers = val;
    }
  }
  get Cust() {
    return this.item.Customers;
  } */

  constructor(
    public patterns: PatternsService,
    private _Service: TransactionService,
    private _CustomerService: CustomerService,
    private _ShipmentService: ShipmentService
  ) {}

  ngOnInit(): void {
    this.item = { ID: 0, TransactionDt: this.formatDate(new Date()) };
    this.transLstSub = this._ShipmentService.getAllByDate().subscribe(result => {
      this.list = result;
    });
    this.item = { ID: 0, TransactionDt: this.formatDate(new Date()) };
    this.CourierLstSub = this._CustomerService.getItemsSimple(0).subscribe(result => (this.CourierLst = result));
    this.CustomerLstSub = this._CustomerService.getItemsSimple(1).subscribe(result => (this.CustomerLst = result));

    this.CourierSettings = {
      singleSelection: true,
      text: 'Select Courier',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      labelKey: 'Name',
      primaryKey: 'ID'
    };
    this.CustomerSettings = {
      singleSelection: true,
      text: 'Select Customer',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      labelKey: 'Name',
      primaryKey: 'ID'
    };
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

  formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return day + '/' + month + '/' + year;
  }

  search() {}
}
