import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AddOrEditCustomer } from '../models/add-or-edit-customer';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EditCustomerService {
  constructor(private http: HttpClient) {}

  getCustomerById(int: number): Observable<AddOrEditCustomer> {
    return this.http.get<AddOrEditCustomer>(
      `${environment.urlService}/customer/${int}`
    );
  }

  editCustomer(data: AddOrEditCustomer): Observable<Response> {
    return this.http
      .put(`${environment.urlService}/customer`, data)
      .pipe(map((response: any) => response));
  }
}
