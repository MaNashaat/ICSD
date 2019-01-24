import { Component, OnInit, ViewChild } from '@angular/core';
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

    ngOnInit(): void {
    }



  }
