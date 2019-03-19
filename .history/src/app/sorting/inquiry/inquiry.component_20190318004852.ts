import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { PatternsService } from '../../shared/services/patterns.service';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

import { DataTableDirective } from 'angular-datatables';
import { Http, Response } from '@angular/http';
import { InquiryService } from './inquiry.service';
import { ActivatedRoute, Router, ChildActivationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';
declare let jsPDF;
@Component({
  selector: 'inquiry-page',
  templateUrl: './inquiry.component.html',
  // styleUrls: ['./deliveries-and-returns.component.scss'],
  animations: [routerTransition()],
  providers: []
})
export class InquiryComponent implements OnInit {
  @ViewChild('detailsForm') public detailsForm: NgForm;
  item = {};
  list: any[] = [];
  constructor(private content: ElementRef, private serviceApi: InquiryService, private patterns: PatternsService) {
    this.list.push({Code: 1, NameAr: 'Ahmed', NameEn: 'Ahmed'});

   }
   search() {
    this.serviceApi.CustomerInquery(this.item).subscribe(result => {
      this.list = result;
      // this.item = { name: 'huda' };
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



