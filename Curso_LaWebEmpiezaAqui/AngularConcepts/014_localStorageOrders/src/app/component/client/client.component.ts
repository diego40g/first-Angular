import { Component } from '@angular/core';
interface Client {
  firstname: string;
  lastname: string;
  age: number;
}
interface Products {
  name: string;
  price: number;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass'],
})
export class ClientComponent {
  clients: Array<Client> = new Array<Client>();
  products: Array<Products> = new Array<Products>();

  ngOnInit() {
    this.clients.push(
      {
        firstname: 'Diego',
        lastname: 'Paz',
        age: 25,
      },
      {
        firstname: 'Ignacio',
        lastname: 'Naula',
        age: 27,
      }
    );

    this.products.push(
      {
        name: 'maiz',
        price: 1.55,
      },
      {
        name: 'juice',
        price: 0.75,
      }
    );
  }

  saveClient() {
    localStorage.setItem('clients', JSON.stringify(this.clients));
  }
  saveProduct() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  readAll() {
    this.clients = JSON.parse(localStorage.getItem('clients')!);
    this.products = JSON.parse(localStorage.getItem('products')!);
  }

  deleteClient() {
    localStorage.removeItem('clients');
  }
  deleteProduct() {
    localStorage.removeItem('products');
  }
  deleteAll() {
    localStorage.clear();
  }
}
