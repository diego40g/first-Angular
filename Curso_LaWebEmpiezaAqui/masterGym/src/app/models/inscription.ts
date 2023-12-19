import { DocumentReference } from '@angular/fire/compat/firestore';

export class Inscription {
  dateInscription: Date | null;
  dateFinal: Date | null;
  client?: DocumentReference;
  price!: DocumentReference | null;
  subTotal!: number;
  iva!: number;
  total!: number;

  constructor() {
    this.dateInscription = null;
    this.dateFinal = null;
    this.client = this.client;
    this.price = this.price;
    this.subTotal = this.subTotal;
    this.iva = this.iva;
    this.total = this.total;
  }
}
