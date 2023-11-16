import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass'],
})
export class ClientListComponent {
  clients = Array<any>();
  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.db
      .collection('client')
      .valueChanges()
      .subscribe((results) => {
        this.clients = results;
      });
  }
}
