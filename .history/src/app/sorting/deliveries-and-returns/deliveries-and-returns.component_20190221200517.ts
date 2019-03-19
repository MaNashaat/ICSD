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
@Component({
  selector: 'deliveries-and-returns-page',
  templateUrl: './deliveries-and-returns.component.html',
  // styleUrls: ['./deliveries-and-returns.component.scss'],
  animations: [routerTransition()],
  providers: []
})
export class DeliveriesAndReturnsComponent implements OnInit {
  @ViewChild('detailsForm') public detailsForm: NgForm;
  item = {};
  sinImputarValue = 'HOY';
  constructor(private serviceApi: DeliveriesAndReturnsService, private patterns: PatternsService) { }
  save() {
    debugger;
    this.serviceApi.DeliveriesAndReturnsReport(this.item).subscribe(result => {
      const file = new Blob(['Hello world!'], { type: 'application/pdf' });
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL);

    });
  }

  ngOnInit() {

  }
}



