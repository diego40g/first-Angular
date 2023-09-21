import { Component } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  clients: Array<Client> = new Array<Client>();
  constructor(private clientsService: ClientService) {}

  ngOnInit() {
    this.clients = this.clientsService.clientsLocalStorage;
  }
}
