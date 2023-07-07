import { Component } from '@angular/core';
interface Client {
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.sass'],
})
export class ClientComponent {
  clients: Array<Client> = new Array<Client>();

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
  }

  saveClient() {
    localStorage.setItem('clients', JSON.stringify(this.clients));
  }
}
