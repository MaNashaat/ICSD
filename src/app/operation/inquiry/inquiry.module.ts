import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { InquiryRoutingModule } from './inquiry-routing.module';


import { InquiryService } from './inquiry.service';
import { InquiryComponent } from './inquiry.component';
import { NgbDatepickerModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { AutocompleteModule } from '../../../../node_modules/ng2-input-autocomplete';


@NgModule({
    imports: [ReactiveFormsModule, FormsModule, CommonModule, NgbDatepickerModule.forRoot(),
        InquiryRoutingModule, DataTablesModule, PageHeaderModule, AutocompleteModule,
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger' // set defaults here
          })],
    declarations: [InquiryComponent],
    providers: [InquiryService]
})
export class InquiryModule { }
