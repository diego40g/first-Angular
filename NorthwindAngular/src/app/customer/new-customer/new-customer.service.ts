import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddOrEditCustomer } from '../models/add-or-edit-customer';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewCustomerService {
  constructor(private http: HttpClient) {}

  saveCustomer(data: AddOrEditCustomer): Observable<Response> {
    data.id = undefined;
    return this.http
      .post(`${environment.urlService}/customer`, data)
      .pipe(map((response: any) => response));
  }
}
