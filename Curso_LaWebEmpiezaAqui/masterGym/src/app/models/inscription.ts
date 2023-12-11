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
    this.dateFinal = this.dateFinal;
    this.client = this.client;
    this.price = this.price;
    this.subTotal = this.subTotal;
    this.iva = this.iva;
    this.total = this.total;
  }
}
