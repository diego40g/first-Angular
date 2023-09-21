import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  addLocalStorage(client: Client) {
    let oldClients: Client[] = this.clientsLocalStorage;
    client.clientId = oldClients.length + 1;
    oldClients.push(client);
    localStorage.setItem('clients', JSON.stringify(oldClients));
  }

  get clientsLocalStorage(): Client[] {
    let clientsOfLocalStorage: Client[] | null = JSON.parse(
      localStorage.getItem('clients')!
    );
    if (clientsOfLocalStorage == null) {
      return new Array<Client>();
    }
    return clientsOfLocalStorage;
  }
}
