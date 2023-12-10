import { DocumentReference } from '@angular/fire/compat/firestore';

export class Inscription {
  dateInscription!: Date;
  dateFinal!: Date;
  client?: DocumentReference;
  price!: DocumentReference;
  subTotal!: number;
  iva!: number;
  total!: number;

  constructor() {
    this.dateInscription = this.dateInscription;
  }
}
