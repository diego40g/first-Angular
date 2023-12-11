import { Component } from '@angular/core';
import { Inscription } from '../models/inscription';
import { Client } from '../models/client';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Price } from '../models/price';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.sass'],
})
export class InscriptionComponent {
  inscription: Inscription = new Inscription();
  selectedClient: Client = new Client();
  prices: Price[] = new Array<Price>();

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection('prices')
      .get()
      .subscribe((result) => {
        result.docs.forEach((item) => {
          let price: any = item.data() as Price;
          price.id = item.id;
          price.ref = item.ref;
          this.prices.push(price);
        });
      });
  }

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
