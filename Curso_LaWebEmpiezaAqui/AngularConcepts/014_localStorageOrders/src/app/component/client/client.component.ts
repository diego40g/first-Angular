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
  ngOnInit() {}

  saveClient() {
    let addClients: Array<Client> = new Array<Client>();
    addClients.push(
      {
        firstname: 'Ignacio',
        lastname: 'Paz',
        age: 25,
      },
      {
        firstname: 'Damian',
        lastname: 'Paz',
        age: 22,
      }
    );
    localStorage.setItem('clients', JSON.stringify(addClients));
  }
  saveProduct() {
    let addProducts: Array<Products> = new Array<Products>();
    addProducts.push(
      {
        name: 'maiz',
        price: 1.25,
      },
      {
        name: 'mouse',
        price: 2.2,
      }
    );
    localStorage.setItem('products', JSON.stringify(addProducts));
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

  get localClient(): Array<Client> {
    let clientListLocalStorage: Client[] = JSON.parse(
      localStorage.getItem('clients')!
    );
    if (clientListLocalStorage === null) {
      return new Array<Client>();
    }
    return clientListLocalStorage;
  }
  get localProduct(): Array<Products> {
    let productListLocalStorage: Products[] = JSON.parse(
      localStorage.getItem('products')!
    );
    if (productListLocalStorage === null) {
      return new Array<Products>();
    }
    return productListLocalStorage;
  }
}
