import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { environment } from 'environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private _http: HttpClient) { }

  getAll(status: Boolean): Observable<Transaction[]> {
      return <Observable<Transaction[]>>this._http.get(environment.apiURL + 'Transaction/GetAll?status=' + status);
  }

  search(transaction: Transaction): Observable<Transaction[]> {
      return <Observable<Transaction[]>>this._http.post(environment.apiURL + 'Transaction/GetAll?', transaction);
  }

  save(item): Observable<Transaction[]> {
    // tslint:disable-next-line:no-debugger
    debugger;
    return <Observable<Transaction[]>>this._http.post(environment.apiURL + 'Transaction/save', item);
  }
}
