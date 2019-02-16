import { Component, OnInit, Input, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Transaction } from '../transaction';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { DeliveryStatusService } from 'src/app/shared/services/delivery-status.service';
import { DeliveryStatus } from '../delivery-status';
import { Shipment } from '../../shipment/Shipment';
import { IDTypeService } from 'src/app/shared/services/idtype.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DataTableDirective)
  public dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();

  @Input() list: Shipment[];
  @Input() isDelivered: boolean;

  statusesSub: Subscription;
  deliverypersons: DeliveryStatus[];
  returnResons: DeliveryStatus[];

  config1: any = { placeholder: 'Select Return Reason', sourceField: ['Name'] };
  config2: any = { placeholder: 'Select Delivery Person', sourceField: ['Name'] };
  config3: any = { placeholder: 'Select ID Types', sourceField: ['Name'] };

  dtOptions: DataTables.Settings = {};
  constructor(private _deliversStatausService: DeliveryStatusService, private _idTypesService: IDTypeService) {}

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.state.clear();
    });
  }
  ngOnInit() {
    this.statusesSub = this._deliversStatausService.getAll().subscribe(result => {
      this.deliverypersons = result.filter(f => f.IsDelivery);
      this.returnResons = result.filter(f => !f.IsDelivery);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      stateSave: true
    };
    this.refreshDataSource(this.list);
  }

  ngOnDestroy(): void {
    this.statusesSub.unsubscribe();
  }

  refreshDataSource(list): void {
    if (list !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.list = list;
        this.dtTrigger.next();
      });
    }
  }
}
