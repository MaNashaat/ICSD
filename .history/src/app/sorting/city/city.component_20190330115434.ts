import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PatternsService } from '../../shared/services/patterns.service';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { CityService } from './city.service';
import { CountryService } from '../country/country.service';
import { City } from './city';
import { Country } from '../country/country';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'city-page',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  animations: [routerTransition()]
})

export class CityComponent implements OnInit, AfterViewInit {
  @ViewChild('detailsForm') public detailsForm: NgForm;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  list: any[] = [];
  dtOptions: DataTables.Settings = {};
  operation = 'view';
  item: City;
  country: Country;
  Countries: any[];
  config2: any = { placeholder: 'Select Country', sourceField: ['NameEn'] };
  selectedItems = [];
  settings = {
    singleSelection: true,
    text: 'Select Cutomers',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    badgeShowLimit: 3,
    labelKey: 'NameEn',
    primaryKey: 'ID'
  };
  constructor(private serviceApi: CityService, private countryService: CountryService, public patterns: PatternsService) {}

  onItemSelect(data) {
    this.country = data;
    this.serviceApi.getItems(data.ID).subscribe(list => {
      this.refreshDataSource(list);
    });
  }
  OnItemDeSelect(data) {
    this.country = data;
    this.serviceApi.getItems(data.ID).subscribe(list => {
      this.refreshDataSource(list);
    });
  }
  onSelectAll(data) {
    this.country = data;
    this.serviceApi.getItems(data.ID).subscribe(list => {
      this.refreshDataSource(list);
    });
  }
  onDeSelectAll(data) {
    this.country = data;
    this.serviceApi.getItems(data.ID).subscribe(list => {
      this.refreshDataSource(list);
    });
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
    debugger;
    item.Countries_ID = this.country.ID;
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
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      stateSave: true
    };
    this.countryService.getItems().subscribe(list => {
      this.Countries = list;
    });
  }
}
