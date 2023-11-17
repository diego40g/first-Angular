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
    /*this.db
      .collection('client')
      .valueChanges()
      .subscribe((results) => {
        this.clients = results;
      });*/
    this.clients.length = 0;
    this.db
      .collection('client')
      .get()
      .subscribe((resultados) => {
        console.log(resultados.docs);
        resultados.docs.forEach((item) => {
          console.log(item.id);
          console.log(item.data());
          console.log(item.ref);

          let client: any = item.data();
          client.id = item.id;
          client.ref = item.ref;
          this.clients.push(client);
        });
        for (let item of resultados.docs) {
          console.log(item.id);
          console.log(item.data());
          console.log(item.ref);
        }
      });
  }
}
