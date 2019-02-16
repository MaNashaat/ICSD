import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Transaction } from '../transaction';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

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

  dtOptions: DataTables.Settings = {};
  constructor() {}

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.state.clear();
    });
  }

  ngOnInit() {}
}
