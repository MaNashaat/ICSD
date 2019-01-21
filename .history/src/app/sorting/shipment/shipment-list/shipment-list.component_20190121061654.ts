import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { ShipmentService } from '../shipment.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Shipment } from '../Shipment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent implements OnInit, AfterViewInit {
  /* @ViewChild('detailsForm') public detailsForm: NgForm; */
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  list: Shipment[];
  dtOptions: DataTables.Settings = {};
  operation = 'view';
  item: any = {};
  constructor(private _service: ShipmentService, private patterns: PatternsService, private translate: TranslateService) {
    this.translate.addLangs(['ar', 'en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/ar|en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.state.clear();
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

  delete = function(id: number) {
    this._service.remove(id).subscribe(result => {
      const filterResult = this.list.filter(function(element, index, array) {
        return element.ID === result.ID;
      });
      this.refreshDataSource(this.list);
      this.back();
    });
  };

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      stateSave: true
    };
    this._service.getAll().subscribe(list => {
      this.refreshDataSource(list);
    });
  }

  refreshDataSource(list): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.list = list;
      this.dtTrigger.next();
    });
  }
}
