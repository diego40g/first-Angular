import { Component } from '@angular/core';
import { Inscription } from '../models/inscription';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.sass'],
})
export class InscriptionListComponent {
  inscriptions: Inscription[] = [];
  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection('inscriptions')
      .get()
      .subscribe((result) => {
        result.forEach((inscription) => {
          let inscriptionObject = inscription.data() as any;
          inscriptionObject.id = inscription.id;

          this.db
            .doc(inscription.data().client.path)
            .get()
            .subscribe((client) => {
              console.log(client.data());
              inscriptionObject.client = client.data();
            });
        });
      });
  }
}
