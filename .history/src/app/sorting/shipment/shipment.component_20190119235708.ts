import { Component, OnInit } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { ShipmentService } from './shipment.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Shipment } from './Shipment';

@Component({
    selector: 'app-shipment',
    templateUrl: './shipment.component.html',
    styleUrls: ['./shipment.component.scss']
  })
  export class ShipmentComponent implements OnInit {

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  }
