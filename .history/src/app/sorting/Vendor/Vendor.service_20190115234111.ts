import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Vendor } from './Vendor';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  items: any[];
  vendors: Vendor[];
  vendor: Vendor;
  constructor(private http: HttpClient) {
    this.getItems().subscribe(res => this.items = res);
  }
  // ******* Implement your APIs ********
  getItems(): Observable<Vendor[]> {
    return <Observable<Vendor[]>>this.http.get(environment.apiURL + 'Vendor/GetAll');
  }
  getItemsSimple(): Observable<Vendor[]> {
    return <Observable<Vendor[]>>this.http.get(environment.apiURL + 'Vendor/GetAllSimple');
  }
  addItem(item): Observable<object> {
    return this.http.post(environment.apiURL + 'Vendor/Save', item);
  }
  updateItem(id, item) {
    item.ID = id;
    // item.IsDeleted =false;
    return this.http.post(environment.apiURL + 'Vendor/Save', item);
    // this.items = this.items.map(i => {

    // if(i.ID === id) {
    //   item.ID=id;
    // //  item.IsDeleted =false;
    //   this.http.post(environment.apiURL+'Vendor/Save',item);
    //   return Object.assign({}, i, item);
    // }
    // return i;
    // })
    // return of(this.items.slice()).pipe(delay(1000));
  }
  removeItem(row) {
    row.IsDeleted = true;
    return this.http.post(environment.apiURL + 'Vendor/Save', row);
    // return this.http.post(environment.apiURL+'Vendor/Delete',row.ID );
  }
}
