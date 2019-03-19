import { Injectable } from '@angular/core';
import { SortingModule } from '../sorting.module';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root' // SortingModule
})
export class InquiryService {

  constructor(private http: HttpClient) {}



  InquiryReport(item): any {

   return this.http.post(environment.apiURL + 'Inquiry/Inquiry', item);

  }

}
