import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderList } from '../models/order-list';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderContainerService {
  constructor(private http: HttpClient) {}

  getOrderList(page: number, rows: number): Observable<OrderList[]> {
    return this.http.get<OrderList[]>(
      `${environment.urlService}/Order/GetPaginatedOrder/${page}/${rows}`
    );
  }
}
