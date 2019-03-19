import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PatternsService } from '../../shared/services/patterns.service';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

import { DataTableDirective } from 'angular-datatables';
import { Http, Response } from '@angular/http';
import { DeliveriesAndReturnsService } from './deliveries-and-returns.service';
import { ActivatedRoute, Router, ChildActivationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';
declare let jsPDF;
@Component({
  selector: 'deliveries-and-returns-page',
  templateUrl: './deliveries-and-returns.component.html',
  // styleUrls: ['./deliveries-and-returns.component.scss'],
  animations: [routerTransition()],
  providers: []
})
export class DeliveriesAndReturnsComponent implements OnInit {
  @ViewChild('detailsForm') public detailsForm: NgForm;
  item = {
    IsDeliverd: true
  };
  list: any;
  sinImputarValue = 'B';
  constructor(private serviceApi: DeliveriesAndReturnsService, private patterns: PatternsService) { }
  save() {
    // tslint:disable-next-line:no-debugger
    debugger;
    if ( this.sinImputarValue === 'D') {
      this.item.IsDeliverd = true;
    } else if (this.sinImputarValue === 'R') {
      this.item.IsDeliverd = false;
    } else {
      this.item.IsDeliverd = null;
    }
    this.serviceApi.DeliveriesAndReturnsReport(this.item).subscribe(result => {
      this.list = result;
    });
  }
  print() {
    const doc = new jsPDF();
    const specialElememtHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };
    const prtContent = document.getElementById('user');
  
  
    setTimeout(() => {
      doc.fromHTML(prtContent, 15, 15, {
        'width': 190,
        'elementHandlers': specialElememtHandlers
      }, function () {
        window.open(doc.output('bloburl'), '_blank');
      });
    }, 0);
  }
  ngOnInit() {

  }
}    



