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
  saveClient() {
    localStorage.setItem('firstname', 'Diego');
    localStorage.setItem('lastname', 'Paz');
  }
}
