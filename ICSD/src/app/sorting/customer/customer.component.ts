import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PatternsService } from '../../shared/services/patterns.service';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

import { DataTableDirective } from 'angular-datatables';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { CountryService } from '../country/country.service';
import { CityService } from '../city/city.service';
import { AreaService } from '../area/area.service';
import { Customer } from './customer';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'customer-page',
  templateUrl: './customer.component.html',
  // styleUrls: ['./customer.component.scss'],
  animations: [routerTransition()],
  providers: [CountryService, CityService]
})
export class CustomerComponent implements OnInit, AfterViewInit {
  @ViewChild('detailsForm') public detailsForm: NgForm;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtTrigger: Subject<any> = new Subject();
  list: any[] = [];
  dtOptions: DataTables.Settings = {};
  operation = 'view';
  item: Customer;
  uType: number;

  Countries: any[];
  SelectedCoutryID: number;
  configCountry: any = { placeholder: 'Select Country', sourceField: ['NameEn'] };

  Cities: any[];
  SelectedCityID: number;
  configCity: any = { placeholder: 'Select City', sourceField: ['NameEn'] };

  Areas: any[];
  SelectedAreaID: number;
  configArea: any = { placeholder: 'Select Area', sourceField: ['NameEn'] };

  constructor(
    private serviceApi: CustomerService,
    private countryService: CountryService,
    private cityService: CityService,
    private aService: AreaService,
    public patterns: PatternsService,
    private router: Router
  ) {
    this.uType = this.router.url === '/customer' ? 1 : 2;
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
    item.CustomerAddresses = [
      {
        Countries_Id: this.SelectedCoutryID,
        Cities_ID: this.SelectedCityID,
        Areas_ID: this.SelectedAreaID
      }
    ];
    this.serviceApi.updateItem(item, this.uType).subscribe(result => {
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
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      stateSave: true
    };
    this.serviceApi.getItems(this.uType).subscribe(list => {
      this.refreshDataSource(list);
    });
    this.countryService.getItems().subscribe(list => {
      this.Countries = list;
    });
  }
  CountrySelected(event) {
    this.Cities = [];
    this.SelectedCoutryID = event.ID;
    this.cityService.getItems(event.ID).subscribe(list => {
      this.Cities = list;
    });
  }
  CitySelected(event) {
    this.SelectedCityID = event.ID;

    this.aService.getItems(event.ID).subscribe(list => {
      this.Areas = list;
    });
  }
  AreaSelected(event) {
    this.SelectedAreaID = event.ID;
  }
}
