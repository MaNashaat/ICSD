import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Transaction } from '../transaction';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DeliveryStatusService } from 'src/app/shared/services/delivery-status.service';
import { DeliveryStatus } from '../delivery-status';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  public dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();

  @Input() list: Transaction[];
  @Input() isDelivered: boolean;

  statusesLst: DeliveryStatus[];
  deliverypersons: DeliveryStatus[];
  returnResons: DeliveryStatus[];

  dtOptions: DataTables.Settings = {};
  constructor(private _deliversStatausService: DeliveryStatusService) {}

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.state.clear();
    });
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      stateSave: true
    };
    this.refreshDataSource(this.list);
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
