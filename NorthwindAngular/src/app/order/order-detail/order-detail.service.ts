import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderList } from '../models/order-list';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailService {
  constructor(private http: HttpClient) {}

  getOrderById(orderId: number): Observable<OrderList> {
    return this.http.get<OrderList>(
      `${environment.urlService}/order/GetOrderById/${orderId}`
    );
  }
}
