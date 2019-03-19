import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PatternsService } from '../../shared/services/patterns.service';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

import { DataTableDirective } from 'angular-datatables';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router, ChildActivationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { CountryService } from '../country/country.service';
import { CityService } from '../city/city.service';
import { AreaService } from '../area/area.service';
import { AddInfoToShipmentService } from './add-info-to-shipment.service';
@Component({
  selector: 'AddInfoToShipment-page',
  templateUrl: './add-info-to-shipment.component.html',
  // styleUrls: ['./AddInfoToShipment.component.scss'],
  animations: [routerTransition()],
  providers: [CountryService, CityService, AreaService]
})
export class AddInfoToShipmentComponent implements OnInit {
  @ViewChild('detailsForm') public detailsForm: NgForm;
  item = {};
  constructor(private serviceApi: AddInfoToShipmentService,
    private patterns: PatternsService,
    private http: Http,
    private router: Router) {}
  ngOnInit() {}

  getCustomerInfo() {

  }
}
