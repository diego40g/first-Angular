import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AddOrEditCustomer } from '../models/add-or-edit-customer';

@Injectable({
  providedIn: 'root',
})
export class DetailCustomerService {
  constructor(private http: HttpClient) {}

  getCustomerById(int: number): Observable<AddOrEditCustomer> {
    return this.http.get<AddOrEditCustomer>(
      `${environment.urlService}/customer/${int}`
    );
  }
}
