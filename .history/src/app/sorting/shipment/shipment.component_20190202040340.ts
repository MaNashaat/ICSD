import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { ShipmentService } from './shipment.service';
import { Observable, Subject, merge, Subscription } from 'rxjs';
import { Shipment } from './Shipment';
import { NgForm } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { OrganizationService } from '../organization/organization.service';
import { Organization } from '../organization/organization';
import { routerTransition } from '../../router.animations';
import { VendorService } from '../vendor/vendor.service';
import { Vendor } from '../vendor/vendor';
import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';
import { Currency } from 'src/app/shared/entities/currency';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import { PaymentMethode } from 'src/app/shared/entities/payment-methode';
import { PaymentMethodeService } from 'src/app/shared/services/payment-methode.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
const URL = environment.apiURL + 'Shipment/Upload';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss'],
  animations: [routerTransition()]
})
export class ShipmentComponent implements OnInit, OnDestroy {
  @ViewChild('detailsForm')
  public detailsForm: NgForm;
  operation = 'view';
  item: Shipment;
  list: Shipment[];
  shipLstSub: Subscription;
  Custsettings = {};
  Orgsettings = {};
  Vendorsettings = {};
  Currencysettings = {};
  paysettings = {};

  // selectedCustomer = [];
  // selectedOrg = [];
  // selectedVendor = [];
  // selectedCurrency = [];
  // selectedPay = [];

  orgLst: Organization[] = [];
  orgLstSub: Subscription;
  @ViewChild('Organization') Organization: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  vendorLst: Vendor[] = [];
  vendorLstSub: Subscription;
  @ViewChild('Vendor') Vendor: NgbTypeahead;
  Vendorfocus$ = new Subject<string>();
  Vendorclick$ = new Subject<string>();

  customerLst: Customer[] = [];
  customerLstSub: Subscription;
  @ViewChild('Customer') Customer: NgbTypeahead;
  Customerfocus$ = new Subject<string>();
  Customerclick$ = new Subject<string>();

  currencyLst: Currency[] = [];
  currencyLstSub: Subscription;
  @ViewChild('Currency') Currency: NgbTypeahead;
  Currencyfocus$ = new Subject<string>();
  Currencyclick$ = new Subject<string>();

  payLst: PaymentMethode[] = [];
  payLstSub: Subscription;
  @ViewChild('pay') pay: NgbTypeahead;
  payfocus$ = new Subject<string>();
  payclick$ = new Subject<string>();

  set Org(val: Organization) {
    if (val != null && val !== undefined) {
      this.item.Organization = val;
      this.item.Organizations_Id = val.ID;
    }
  }
  get Org() {
    return this.item.Organization;
  }

  set Vnd(val: Vendor) {
    if (val != null && val !== undefined) {
      this.item.Vendor = val;
      this.item.Vendors_Id = val.ID;
    }
  }
  get vnd() {
    return this.item.Vendor;
  }

  set Cust(val: Customer) {
    if (val != null && val !== undefined) {
      this.item.Customer = val;
      this.item.Customers_Id = val.ID;
    }
  }
  get Cust() {
    return this.item.Customer;
  }

  set Curr(val: Currency) {
    if (val != null && val !== undefined) {
      this.item.Currency = val;
      this.item.Currencies_Id = val.ID;
    }
  }
  get Curr() {
    return this.item.Currency;
  }

  set PayMethode(val: PaymentMethode) {
    if (val != null && val !== undefined) {
      this.item.PaymentMethode = val;
      this.item.PaymentMethodes_Id = val.ID;
    }
  }
  get PayMethode() {
    return this.item.PaymentMethode;
  }

  set ShipmentDate(val: any) {
    if (val != null && val !== undefined) {
      this.item.ShipmentDt = val;
    }
  }
  get ShipmentDate() {
    return this.item.ShipmentDt;
  }

  constructor(
    public patterns: PatternsService,
    private _Service: ShipmentService,
    private _OrgService: OrganizationService,
    private _VendorService: VendorService,
    private _CustomerService: CustomerService,
    private _CurrencyService: CurrencyService,
    private _PayService: PaymentMethodeService
  ) {}

  ngOnInit(): void {
    this.shipLstSub = this._Service.getAll().subscribe(list => {
      this.list = list;
    });
    this.orgLstSub = this._OrgService.getItemsSimple().subscribe(result => (this.orgLst = result));
    this.vendorLstSub = this._VendorService.getItems().subscribe(result => (this.vendorLst = result));
    this.customerLstSub = this._CustomerService.getItemsSimple(1).subscribe(result => (this.customerLst = result));
    this.currencyLstSub = this._CurrencyService.getAll().subscribe(result => (this.currencyLst = result));
    this.payLstSub = this._PayService.getAll().subscribe(result => (this.payLst = result));

    this.item = { ID: 0, Code: '', ShipmentDt: null, ShipmentValue: 0 };

    this.Custsettings = {
      singleSelection: true,
      text: 'Select Cutomers',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      labelKey: 'NameEn',
      primaryKey: 'ID'
    };
    this.Orgsettings = {
      singleSelection: true,
      text: 'Select Organization',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      labelKey: 'NameEn',
      primaryKey: 'ID'
    };

    this.Vendorsettings = {
      singleSelection: true,
      text: 'Select Vendor',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      labelKey: 'NameEn',
      primaryKey: 'ID'
    };
    this.paysettings = {
      singleSelection: true,
      text: 'Select Payment Method',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      labelKey: 'NameEn',
      primaryKey: 'ID'
    };
    this.Currencysettings = {
      singleSelection: true,
      text: 'Select Currency',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      labelKey: 'NameEn',
      primaryKey: 'ID'
    };
  }

  ngOnDestroy(): void {
    this.shipLstSub.unsubscribe();
    this.orgLstSub.unsubscribe();
    this.vendorLstSub.unsubscribe();
    this.currencyLstSub.unsubscribe();
    this.payLstSub.unsubscribe();
  }

  formatter = (x: { Name: string }) => x.Name;

  searchOrg = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.Organization.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.orgLst : this.orgLst.filter(v => v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  searchVend = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.Vendor.isPopupOpen()));
    const inputFocus$ = this.Vendorfocus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term =>
        (term === '' ? this.vendorLst : this.vendorLst.filter(v => v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)
      )
    );
  }

  searchCustomer = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.Customer.isPopupOpen()));
    const inputFocus$ = this.Customerfocus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term =>
        (term === '' ? this.customerLst : this.customerLst.filter(v => v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)
      )
    );
  }

  selectedItem(item) {
    this._CustomerService.getDefaultAddressByCustomer(item.ID).subscribe(result => {
      if (result != null) {
        this.item.Address = result.Address;
        this.item.CustomerAddresses_Id = result.ID;
      } else {
        this.item.Address = '';
        this.item.CustomerAddresses_Id = null;
      }
    });
  }

  searchCurrency = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.Currency.isPopupOpen()));
    const inputFocus$ = this.Currencyfocus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term =>
        (term === '' ? this.currencyLst : this.currencyLst.filter(v => v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)
      )
    );
  }

  searchPay = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.pay.isPopupOpen()));
    const inputFocus$ = this.payfocus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.payLst : this.payLst.filter(v => v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  open = function(_item: any) {
    debugger;
    this.detailsForm.reset();
    this.operation = _item == null ? 'add' : 'edit';
    switch (this.operation) {
      case 'add':
        this.item = { ID: 0, Code: '', ShipmentDt: null, ShipmentValue: 0 };
        break;
      case 'edit':
        this.item = Object.assign({}, _item);
        this.item.Customer = this.item.Customer == null ? [] : [this.item.Customer];
        this.item.PaymentMethode = this.item.PaymentMethode == null ? [] : [this.item.PaymentMethode];
        this.item.Currency = this.item.Currency == null ? [] : [this.item.Currency];
        this.item.Vendor = this.item.Vendor == null ? [] : [this.item.Vendor];
        this.item.Organization = this.item.Organization == null ? [] : [this.item.Organization];
        break;
    }
  };

  back = function() {
    if (this.operation !== 'view') {
      this.operation = 'view';
    }
  };

  save = function() {
    this.item.Customer = this.item.Customer[0];
    this.item.PaymentMethode = this.item.PaymentMethode[0];
    this.item.Currency = this.item.Currency[0];
    this.item.Vendor = this.item.Vendor[0];
    this.item.Organization = this.item.Organization[0];

    this._Service.save(this.item).subscribe(result => {
      if (result != null && result !== undefined) {
        const filterResult = this.list.filter(function(element, index, array) {
          return element.ID === result.ID;
        });
        if (filterResult.length === 0) {
          this.list.push(result);
        } else {
          const index: number = this.list.indexOf(filterResult[0]);
          this.list[index] = Object.assign({}, result);
        }
        this.back();
      }
    });
  };
}
