import { Injectable } from '@angular/core';
import { SortingModule } from '../sorting.module';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'  // SortingModule
})
export class CustomerService {
  items: any[];
  supporties: Customer[];
  support: Customer;
  constructor(private http: HttpClient) {
  }
  getItems(uType: number): Observable<Customer[]> {
    return  uType === 1 ? <Observable<Customer[]>>this.http.get(environment.apiURL + 'Customer/GetAll') :
    <Observable<Customer[]>>this.http.get(environment.apiURL + 'DeliverAcencies/GetAll') ;
  }
  getItemsSimple(uType: number): Observable<Customer[]> {
    return  uType === 1 ? <Observable<Customer[]>>this.http.get(environment.apiURL + 'Customer/GetAllSimple') :
    <Observable<Customer[]>>this.http.get(environment.apiURL + 'DeliverAcencies/GetAllSimple');
  }
  addItem(item, uType: number): Observable<object> {
    return  uType === 1 ? this.http.post(environment.apiURL + 'Customer/Save', item) :
    this.http.post(environment.apiURL + 'DeliverAcencies/Save', item);
  }
  updateItem(id, item, uType: number) {
    item.ID = id;
    return uType === 1 ? this.http.post(environment.apiURL + 'Customer/Save', item) :
     this.http.post(environment.apiURL + 'DeliverAcencies/Save', item);
  }
  removeItem(row, uType: number) {
    row.IsDeleted = true;
    return uType === 1 ? this.http.post(environment.apiURL + 'Customer/Save', row) :
    this.http.post(environment.apiURL + 'DeliverAcencies/Save', row);
  }
}