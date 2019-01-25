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
  item: any = {};
  list: Shipment[];
  shipLstSub: Subscription;

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

  constructor(
    private _Service: ShipmentService,
    public patterns: PatternsService,
    private _OrgService: OrganizationService,
    private _VendorService: VendorService,
    private _CustomerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.shipLstSub = this._Service.getAll().subscribe(list => {
      this.list = list;
    });
    this.orgLstSub = this._OrgService.getItemsSimple().subscribe(result => (this.orgLst = result));
    this.vendorLstSub = this._VendorService.getItems().subscribe(result => (this.vendorLst = result));
    this.customerLstSub = this._CustomerService.getItemsSimple(1).subscribe(result => (this.customerLst = result));
  }

  ngOnDestroy(): void {
    this.shipLstSub.unsubscribe();
    this.orgLstSub.unsubscribe();
    this.vendorLstSub.unsubscribe();
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
    this._CustomerService.getDefaultAddressByCustomer(item.item.ID).subscribe(result => {
      if (result != null) {
        this.item.Address = result.Address;
        this.item.CustomerAddress_Id = result.ID;
      } else {
        this.item.Address = '';
        this.item.CustomerAddress_Id = null;
      }
    });
  }

  open = function(_item: any) {
    this.detailsForm.reset();
    this.operation = _item == null ? 'add' : 'edit';
    switch (this.operation) {
      case 'add':
        this.item = {};
        break;
      case 'edit':
        this.item = Object.assign({}, _item);
        break;
    }
  };

  back = function() {
    if (this.operation !== 'view') {
      this.item = {};
      this.operation = 'view';
    }
  };

  save = function() {
    this.service.save(this.item).subscribe(result => {
      if (result.status === '200') {
        const filterResult = this.list.filter(function(element, index, array) {
          return element.ID === result.ID;
        });
        if (filterResult.length === 0) {
          this.list.push(result);
        } else {
          const index: number = this.list.indexOf(filterResult[0]);
          this.list[index] = Object.assign({}, result);
        }
      }
    });
  };
}
