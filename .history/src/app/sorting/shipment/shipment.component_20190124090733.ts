import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { ShipmentService } from './shipment.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Shipment } from './Shipment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {
  @ViewChild('detailsForm') public detailsForm: NgForm;
  operation = 'view';
  item: any = {};
  list: Shipment[];

  constructor(private _Service: ShipmentService, public patterns: PatternsService) {}

  ngOnInit(): void {
    this._Service.getAll().subscribe(list => {
      this.list = list;
      // this.refreshDataSource(list);
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
}
