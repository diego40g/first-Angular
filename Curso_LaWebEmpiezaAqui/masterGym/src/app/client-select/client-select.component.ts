import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-select',
  templateUrl: './client-select.component.html',
  styleUrls: ['./client-select.component.sass'],
})
export class ClientSelectComponent {
  clients: Client[] = new Array<Client>();
  @Input('firstname') firstname: string = '';

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
      if (client.firstname.toLowerCase().includes(firstname)) {
        client.visible = true;
      } else {
        client.visible = false;
      }
    });
  }

  selectClient(client: Client) {
    this.firstname = client.firstname + ' ' + client.lastname;
    this.clients.forEach((client) => {
      client.visible = false;
    });
    console.log(client);
  }

  cancelClient() {
    this.firstname = '';
  }
}
