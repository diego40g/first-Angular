import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-select',
  templateUrl: './client-select.component.html',
  styleUrls: ['./client-select.component.sass'],
})
export class ClientSelectComponent {
  clients: Client[] = new Array<Client>();

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection<Client>('clients')
      .get()
      .subscribe((result) => {
        this.clients.length = 0;
        result.docs.forEach((item) => {
          let client: Client = item.data() as Client;
          client.id = item.id;
          client.ref = item.ref;
          client.visible = false;
          this.clients.push(client);
        });
        console.log(this.clients);
      });
  }

  searchClient(evento: any) {
    const firstname = (evento.target as HTMLInputElement)?.value.toLowerCase();
    this.clients.forEach((client) => {
      if (client.firstname.toLowerCase().includes(firstname.toLowerCase())) {
        client.visible = true;
      } else {
        client.visible = false;
      }
    });
  }
}
