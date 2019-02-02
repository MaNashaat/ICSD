import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { TransactionService } from './transaction.service';
import { Subscription } from 'rxjs';
import { TransactionSC } from './transaction';
import { NgForm } from '@angular/forms';
import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';
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
  transSC: TransactionSC;
  list: Shipment[];
  transLstSub: Subscription;

  CourierLst: Customer[] = [];
  CourierLstSub: Subscription;

  CustomerLst: Customer[] = [];
  CustomerLstSub: Subscription;

  CourierSettings = {};
  CustomerSettings = {};
  selectedCouriers: [];
  selectedCustomers: [];

  constructor(
    public patterns: PatternsService,
    private _Service: TransactionService,
    private _CustomerService: CustomerService,
    private _ShipmentService: ShipmentService
  ) {}

  ngOnInit(): void {
    this.transLstSub = this._ShipmentService.getAllByDate().subscribe(result => {
      this.list = result;
    });
    this.transSC = { Courier: { ID: 0, Name: '' }, Customers: [{ ID: 0, Name: '' }], TransactionDt: this.formatDate(new Date()) };

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

  search() {
    debugger;
    this.transSC.Couriers_Id = this.selectedCouriers[0].ID;
    this.transSC.CustomerIDs = this.selectedCustomers.map(function(item) {
      return item.ID;
    });
    this._ShipmentService.getFiltered(this.transSC).subscribe(result => {
      this.list = result;
    });
  }
  save() {}

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.transSC.Courier);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.transSC.Courier);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}
