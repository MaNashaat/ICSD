import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { TransactionService } from './transaction.service';
import { Subject, Subscription, Observable, merge } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Transaction, TransactionSC } from './transaction';
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
  transSC: TransactionSC;
  list: Shipment[];
  transLstSub: Subscription;

  CourierLst: Customer[] = [];
  CourierLstSub: Subscription;

  CustomerLst: Customer[] = [];
  CustomerLstSub: Subscription;

  CourierSettings = {};
  CustomerSettings = {};


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
      primaryKey: 'ID',
      showCheckbox: false
    };
    this.CustomerSettings = {
      singleSelection: false,
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

  formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return day + '/' + month + '/' + year;
  }

  search() {}
}
