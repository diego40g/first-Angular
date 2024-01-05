import {
  DocumentReference,
  SnapshotOptions,
} from '@angular/fire/compat/firestore';

export class Inscription {
  id: string | undefined | null;
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

  validate(): any {
    let response = {
      isValid: false,
      message: '',
    };

    if (this.client == null || this.client == undefined) {
      response.isValid = false;
      response.message = 'Select the client is required';
      return response;
    }
    if (this.dateInscription == null || this.dateInscription == undefined) {
      response.isValid = false;
      response.message = 'Date inscription is required';
      return response;
    }
    if (this.dateFinal == null || this.dateFinal == undefined) {
      response.isValid = false;
      response.message = 'Date final is required';
      return response;
    }
    if (this.price == null || this.price == undefined) {
      response.isValid = false;
      response.message = 'Price is required';
      return response;
    }
    if (this.subTotal <= 0 || this.subTotal == undefined) {
      response.isValid = false;
      response.message = 'Subtotal is required';
      return response;
    }
    if (this.iva <= 0 || this.iva == undefined) {
      response.isValid = false;
      response.message = 'IVA is required';
      return response;
    }
    if (this.total <= 0 || this.total == undefined) {
      response.isValid = false;
      response.message = 'Total is required';
      return response;
    }

    response.isValid = true;
    return response;
  }
}
