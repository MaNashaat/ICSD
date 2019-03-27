import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PatternsService } from '../../shared/services/patterns.service';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

import { DataTableDirective } from 'angular-datatables';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router, ChildActivationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import{ CustomerService} from '../customer/customer.service';

import { AddInfoToShipmentService } from './add-info-to-shipment.service';
import { AddInfoToShipment } from './add-info-to-shipment';
@Component({
  selector: 'AddInfoToShipment-page',
  templateUrl: './add-info-to-shipment.component.html',
  // styleUrls: ['./AddInfoToShipment.component.scss'],
  animations: [routerTransition()],
  providers: [CustomerService]
})
export class AddInfoToShipmentComponent implements OnInit {

  @ViewChild('detailsForm') public detailsForm: NgForm;

  item: AddInfoToShipment;
  constructor(
    private serviceApi: AddInfoToShipmentService,
    private customerAPI: CustomerService,
    public patterns: PatternsService,
    private http: Http,
    private router: Router
    ) {
      this.item = {
        Name: null,
        NameAr: null,
        NameEn: null,
        Code: null,
        Notes: null,
        Address: null,
        Mobile : null,
    };
    }
  ngOnInit() {}

  getCustomerInfo(code) {
    this.customerAPI.GetBycode(code).subscribe(result => {
      // tslint:disable-next-line:no-debugger

      this.item = result;
      });
    }
    save() {
this.serviceApi.AddStatement(this.item).subscribe(result => {
  // tslint:disable-next-line:no-debugger
  debugger;
  // this.item = result;
  });
}
}
