import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PatternsService } from '../../shared/services/patterns.service';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { DeliveriesAndReturnsService } from './deliveries-and-returns.service';
import { deliveriesAndReturns } from './deliveries-and-returns';
@Component({
  selector: 'deliveries-and-returns-page',
  templateUrl: './deliveries-and-returns.component.html',
  // styleUrls: ['./deliveries-and-returns.component.scss'],
  animations: [routerTransition()],
  providers: []
})
export class DeliveriesAndReturnsComponent implements OnInit {
  @ViewChild('detailsForm') public detailsForm: NgForm;
  item: deliveriesAndReturns;
  sinImputarValue = 'B';
  constructor(private serviceApi: DeliveriesAndReturnsService, public patterns: PatternsService) {
    this.item = {
      Address: null,
      Code: null,
      CustmerName: null,
      DateFrom: null,
      DateTo: null,
      IsDeliverd: null,
      Mobile: null,
      ShipmentDt: null
    };
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
  save() {
    // tslint:disable-next-line:no-debugger
    debugger;
    // if ( this.sinImputarValue === 'D') {
    //   this.item.IsDeliverd = true;
    // } else if (this.sinImputarValue === 'R') {
    //   this.item.IsDeliverd = false;
    // } else {
    //   this.item.IsDeliverd = null;
    // }
    this.serviceApi.DeliveriesAndReturnsReport(this.item).subscribe(result => {
      const file = new Blob(['Hello world!'], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  }

  ngOnInit() {}
}
