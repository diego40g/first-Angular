import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.sass'],
})
export class AddClientComponent {
  addForm!: FormGroup;
  client: Client = new Client();
  constructor(private fb: FormBuilder, public clientService: ClientService) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  addClient() {
    this.client = this.addForm.value as Client;
    this.clientService.addLocalStorage(this.client);
    this.addForm.reset();
  }
}
