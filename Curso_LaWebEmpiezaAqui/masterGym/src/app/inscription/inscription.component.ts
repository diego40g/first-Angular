import { Component } from '@angular/core';
import { Inscription } from '../models/inscription';
import { Client } from '../models/client';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.sass'],
})
export class InscriptionComponent {
  inscription: Inscription = new Inscription();
  selectedClient: Client = new Client();

  assignClient(client: Client) {
    this.inscription.client = client.ref;
    this.selectedClient = client;
  }

  deleteClient() {
    this.selectedClient = new Client();
    this.inscription.client = undefined;
  }

  saveClient() {
    console.log(this.inscription);
  }
}
