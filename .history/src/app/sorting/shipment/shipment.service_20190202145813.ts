import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Shipment } from './Shipment';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<Shipment[]> {
    return <Observable<Shipment[]>>this._http.get(environment.apiURL + 'Shipment/GetAll');
  }

  getAllByDate(): Observable<Shipment[]> {
    return <Observable<Shipment[]>>this._http.get(environment.apiURL + 'Shipment/GetAllByDate');
  }

  getFiltered(trans): Observable<Shipment[]> {
    return <Observable<Shipment[]>>this._http.post(environment.apiURL + 'Shipment/GetFiltered', trans);
  }

  getAllSimple(selectedShipment): Observable<Shipment[]> {
    return <Observable<Shipment[]>>this._http.get(environment.apiURL + 'Shipment/GetAllSimple');
  }

  save(item): Observable<Shipment> {
    // tslint:disable-next-line:no-debugger
    debugger;
    return <Observable<Shipment>>this._http.post(environment.apiURL + 'Shipment/save', item);
  }

  remove(id): Observable<boolean> {
    return <Observable<boolean>>this._http.post(environment.apiURL + 'Shipment/Delete', id);
  }
}
