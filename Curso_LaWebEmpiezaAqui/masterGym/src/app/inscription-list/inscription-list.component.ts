import { Component } from '@angular/core';
import { Inscription, Timestamp } from '../models/inscription';
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
    // this.inscriptions.length = 0;
    this.db
      .collection('inscriptions')
      .get()
      .subscribe((result) => {
        result.forEach((inscription) => {
          let inscriptionGetting = inscription.data() as Inscription;
          inscriptionGetting.id = inscription.id;

          let clientData = inscriptionGetting.client as any;

          this.db
            .doc(clientData.path)
            .get()
            .subscribe((client) => {
              inscriptionGetting.client = client.data() as any;
              let dateInscription: Timestamp | Date | null =
                inscriptionGetting.dateInscription;
              let dateFinal: Timestamp | Date | null =
                inscriptionGetting.dateFinal;

              if (dateInscription && 'seconds' in dateInscription) {
                let timestamp = dateInscription as unknown as Timestamp;
                inscriptionGetting.dateInscription = new Date(
                  timestamp.seconds * 1000
                );
              }
              if (dateFinal && 'seconds' in dateFinal) {
                let timestamp = dateFinal as unknown as Timestamp;
                inscriptionGetting.dateFinal = new Date(
                  timestamp.seconds * 1000
                );
              }
              this.inscriptions.push(inscriptionGetting);
              console.log(inscriptionGetting);
            });
        });
      });
  }
}
