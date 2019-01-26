import { Component, ViewChild, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Shipment } from '../Shipment';
import { ShipmentService } from '../shipment.service';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  public dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();

  @Input() list: Shipment[];
  @Output() notify: EventEmitter<Shipment> = new EventEmitter<Shipment>();

  dtOptions: DataTables.Settings = {};
  constructor(private patterns: PatternsService, private _service: ShipmentService) {}

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.state.clear();
    });
  }

  open(itm: Shipment) {
    this.notify.emit(itm);
  }

  delete = function(id: number) {
    this._service.remove(id).subscribe(result => {
      const filterResult = this.list.filter(function(element, index, array) {
        return element.ID === result.ID;
      });
      this.refreshDataSource(this.list);
    });
  };
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      stateSave: true
    };
    this.refreshDataSource(this.list);
  }

  refreshDataSource(list): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    if (list !== undefined) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.list = list;
        this.dtTrigger.next();
      });
    }
  }
}
