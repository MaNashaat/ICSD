import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PatternsService } from 'src/app/shared/services/patterns.service';
import { ShipmentService } from './shipment.service';
import { Observable, Subject, merge, Subscription } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Shipment } from './Shipment';
import { NgForm } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { OrganizationService } from '../organization/organization.service';
import { Organization } from '../organization/organization';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit, OnDestroy {
  @ViewChild('detailsForm') public detailsForm: NgForm;
  operation = 'view';
  item: any = {};
  list: Shipment[];
  orgLst: Organization[] = [];
  shipLstSub: Subscription;
  orgLstSub: Subscription;

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  constructor(private _Service: ShipmentService, public patterns: PatternsService, private _OrgService: OrganizationService) {}

  ngOnInit(): void {
    this.shipLstSub = this._Service.getAll().subscribe(list => {
      this.list = list;
    });
   this.orgLstSub = this._OrgService.getItemsSimple().subscribe(result => (this.orgLst = result));
  }

  ngOnDestroy(): void {
    this.shipLstSub.unsubscribe();
    this.orgLstSub.unsubscribe();
  }

  searchOrg = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.orgLst : this.orgLst.filter(v => v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
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

  back = function() {
    if (this.operation !== 'view') {
      this.item = {};
      this.operation = 'view';
    }
  };

  save = function() {
    this.service.save(this.item).subscribe(result => {
      if (result.status === '200') {
        const filterResult = this.list.filter(function(element, index, array) {
          return element.ID === result.ID;
        });
        if (filterResult.length === 0) {
          this.list.push(result);
        } else {
          const index: number = this.list.indexOf(filterResult[0]);
          this.list[index] = Object.assign({}, result);
        }
      }
    });
  };
}
