import { Component } from '@angular/core';
import { Inscription } from '../models/inscription';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.sass'],
})
export class InscriptionListComponent {
  inscriptions: any[] = [];
  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection('inscriptions')
      .get()
      .subscribe((result) => {
        result.forEach((inscription) => {
          let inscriptionGetting = inscription.data() as any;
          inscriptionGetting.id = inscription.id;

          let clientData = inscription.data().client;

          console.log(inscription.data());

          /*this.db
            .doc(clientPath!.clientPath.path)
            .get()
            .subscribe((client) => {
              inscriptionGetting.client = client.data();
              this.inscriptions.push(inscriptionGetting);
              console.log(client.data());
            });*/
        });
      });
  }
}
