import { Injectable } from '@angular/core';
import { SortingModule } from '../sorting.module';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ShipmentBOD } from './POD';
import { Declaration } from './declaration';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: SortingModule
})
export class  PODService {
  items: any[];
  Declarationies: ShipmentBOD[];
  ShipmentBOD: ShipmentBOD;

  constructor(private http: HttpClient) {
   // this.getItems().subscribe(res => this.items = res);
  }

  // ******* Implement your APIs ********

  getItems(data): Observable<ShipmentBOD[]> {
    return <Observable<ShipmentBOD[]>>this.http.post(environment.apiURL + 'Shipment/GetAllBOD',data);
  }
  getDeliverAgency(): Observable<ShipmentBOD[]> {
    return <Observable<ShipmentBOD[]>>this.http.get(environment.apiURL + 'DeliverAcencies/GetAll');
  }
  getItemsSimple(): Observable<ShipmentBOD[]> {
    return <Observable<ShipmentBOD[]>>this.http.get(environment.apiURL + 'ShipmentBOD/GetAllSimple');
  }
  addItem(item): Observable<object> {
    return this.http.post(environment.apiURL + 'ShipmentBOD/Save', item);
  }
  updateItem(id, item) {
    item.ID = id;
    // item.IsDeleted =false;
    return this.http.post(environment.apiURL + 'ShipmentBOD/Save', item);
    /* this.items = this.items.map(i => {
       //  item.IsDeleted =false;
       this.http.post(environment.apiURL+'ShipmentBOD/Save',item);
         return Object.assign({}, i, item);
       }
       return i;
     })
     return of(this.items.slice()).pipe(delay(1000));*/
  }
  removeItem(row) {
    row.IsDeleted = true;
    return this.http.post(environment.apiURL + 'ShipmentBOD/Save', row);
  }
}
