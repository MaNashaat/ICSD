import { Injectable } from '@angular/core';
import { SortingModule } from '../sorting.module';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddInfoToShipmentService {

  constructor(private http: HttpClient) { }

  AddStatement(shipment): Observable<any[]> {
    return <Observable<any[]>>this.http.post(environment.apiURL + 'Operation/AddStatement', shipment);
  }
}
