import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PatternsService } from '../../shared/services/patterns.service';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

import { DataTableDirective } from 'angular-datatables';
import { Http, Response } from '@angular/http';
import { PODService } from './POD.service';
import { CountryService } from '../country/country.service';
import { CityService } from '../city/city.service';
import { CustomerService } from '../customer/customer.service';
import { ShipmentBOD } from './POD';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'POD-page',
  templateUrl: './POD.component.html',
  styleUrls: ['./POD.component.css'],
  animations: [routerTransition()],
  providers: [CustomerService, PODService]
})
export class PODComponent implements OnInit, AfterViewInit {
  @ViewChild('detailsForm') public detailsForm: NgForm;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  list: any[] = [];
  dtOptions: DataTables.Settings = {};
  operation = 'view';
  item: ShipmentBOD;
  Cutstomers: any[];
  SelectedCustomerID: number;
  configCustomer: any = { placeholder: 'Select Country', sourceField: ['NameEn'] };

  Couriers: any[];
  SelectedCourierID: number;
  configCourier: any = { placeholder: 'Select City', sourceField: ['NameEn'] };

  selectedItems = [];
  selectedCourier = [];
  settings = {};
  settingsCouriers = {};
  ShipmentDt: any;
  constructor(
    private serviceApi: PODService,
    private CustmService: CustomerService,
    private countryService: CountryService,
    public patterns: PatternsService,
    private http: Http
  ) {
    this.item = {
      Code: null,
      Name: null,
      NameAr: null,
      Courier: null,
      Customers: null,
      NameEn: null,
      ShipmentDt: null
    };
    this.ShipmentDt = this.formatDate( new Date());
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      stateSave: true
    };
    this.CustmService.getItemsSimple(1).subscribe(list => {
      this.Cutstomers = list;
    });
    this.CustmService.getItemsSimple(2).subscribe(list => {
      this.Couriers = list;
    });

    this.settings = {
      singleSelection: false,
      text: 'Select Cutomers',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      labelKey: 'NameEn',
      primaryKey: 'ID'
    };

    this.settingsCouriers = this.settings = {
      singleSelection: true,
      text: 'Select Couriers',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      labelKey: 'NameEn',
      primaryKey: 'ID'
    };
  }




  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.state.clear();
    });
  }
  open = function(_item?: any) {
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

  save = function() {
    this.applySave(this.item);
  };

  delete = function(_item: any) {
    _item.IsDeleted = true;
    this.applySave(_item);
  };

  private applySave = function(item) {
    item.Cities_ID = this.SelectedCourierID;
    this.serviceApi.updateItem(item).subscribe(result => {
      const filterResult = this.list.filter(function(element, index, array) {
        return element.ID === result.ID;
      });
      if (filterResult.length === 0) {
        this.list.push(result);
      } else {
        const index: number = this.list.indexOf(filterResult[0]);
        if (result.IsDeleted === undefined || !result.IsDeleted) {
          this.list[index] = Object.assign({}, result);
        } else {
          this.list.splice(index, 1);
        }
      }
      this.refreshDataSource(this.list);
      this.back();
    });
  };
  back = function() {
    if (this.operation !== 'view') {
      this.item = {};
      this.operation = 'view';
    }
  };

  refreshDataSource(list): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.list = list;
      this.dtTrigger.next();
    });
  }
  formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return day + '/' + month + '/' + year;
  }

  CustomerSelected(event) {
    this.SelectedCustomerID = event.ID;
    this.getShipment();
  }
  CourierSelected(event) {
    this.SelectedCourierID = event.ID;
    this.getShipment();
  }

  getShipment() {
    debugger;
    if (this.selectedItems.length > 0 && this.ShipmentDt !== undefined) {
      const requestData = new ShipmentBOD();

      requestData.Customers = this.selectedItems;
      requestData.ShipmentDt = this.formatDate( this.ShipmentDt).toString();
      requestData.Courier = this.selectedCourier[0];
      this.serviceApi.getItems(requestData).subscribe(list => {
        this.refreshDataSource(list);
      });
    }
  }

  SubmintShipment() {
    if (this.selectedItems.length > 0 && this.selectedCourier.length > 0 && this.ShipmentDt !== undefined) {
      const requestData = new ShipmentBOD();

      requestData.Customers = this.selectedItems;
      requestData.ShipmentDt = this.formatDate( this.ShipmentDt).toString();
      requestData.Courier = this.selectedCourier[0];
      this.serviceApi.save(requestData).subscribe(list => {
        //  this.refreshDataSource(list);
      });
    }
  }

  onItemSelect(item: any) {
    this.getShipment();
  }
  OnItemDeSelect(item: any) {
    this.getShipment();
  }
  onSelectAll(items: any) {
    this.getShipment();
  }
  onDeSelectAll(items: any) {
    this.getShipment();
  }
  onCourierSelect(items: any) {
    this.getShipment();
  }
}
