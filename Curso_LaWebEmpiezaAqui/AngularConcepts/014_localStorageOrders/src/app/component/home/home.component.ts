import { Component } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  clients: Array<Client> = new Array<Client>();
  constructor(
    private clientsService: ClientService,
    public orderService: OrderService
  ) {}

  ngOnInit() {
    this.clients = this.clientsService.clientsLocalStorage;
  }

  searchClient(event: Event) {
    const target = event.target as HTMLInputElement;
    const searchWord: string = target.value;
    this.clients = this.clientsService.clientsLocalStorage.filter((client) => {
      const searchFirstName = client.firstname?.toLocaleLowerCase() || '';
      const searchLastName = client.lastname?.toLocaleLowerCase() || '';
      const searchAddress = client.address?.toLocaleLowerCase() || '';

      return (
        searchFirstName.includes(searchWord.toLowerCase()) ||
        searchLastName.includes(searchWord.toLowerCase()) ||
        searchAddress.includes(searchWord.toLowerCase()) ||
        client.clientId?.toString().includes(searchWord.toLowerCase())
      );
    });
  }
}
