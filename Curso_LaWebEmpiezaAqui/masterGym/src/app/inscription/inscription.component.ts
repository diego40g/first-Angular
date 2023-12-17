import { Component } from '@angular/core';
import { Inscription } from '../models/inscription';
import { Client } from '../models/client';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Price } from '../models/price';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.sass'],
})
export class InscriptionComponent {
  inscription: Inscription = new Inscription();
  selectedClient: Client = new Client();
  selectedPrice: Price | undefined = new Price();
  prices: Price[] = new Array<Price>();

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.db
      .collection('prices')
      .get()
      .subscribe((result) => {
        result.docs.forEach((item) => {
          let price: any = item.data() as Price;
          price.id = item.id;
          price.ref = item.ref;
          this.prices.push(price);
        });
      });
  }

  assignClient(client: Client) {
    this.inscription.client = client.ref;
    this.selectedClient = client;
  }

  deleteClient() {
    this.selectedClient = new Client();
    this.inscription.client = undefined;
  }

  saveClient() {
    console.log(this.inscription);
  }

  selectPrice(evento: any) {
    const id = (evento.target as HTMLInputElement)?.value;
    this.selectedPrice = this.prices.find((x) => x.id == id);
    this.inscription.price = this.selectedPrice?.ref!;

    this.inscription.dateInscription = new Date();

    if (this.selectedPrice?.durationType == '1') {
      let day: number = this.selectedPrice?.duration!;
      let finalDate = new Date(
        this.inscription.dateInscription.getFullYear(),
        this.inscription.dateInscription.getMonth(),
        this.inscription.dateInscription.getDate() + day
      );
      this.inscription.dateFinal = finalDate;
    }
    if (this.selectedPrice?.durationType == '2') {
      let day: number = this.selectedPrice?.duration! * 7;
      let finalDate = new Date(
        this.inscription.dateInscription.getFullYear(),
        this.inscription.dateInscription.getMonth(),
        this.inscription.dateInscription.getDate() + day
      );
      this.inscription.dateFinal = finalDate;
    }
    if (this.selectedPrice?.durationType == '3') {
      let day: number = this.selectedPrice?.duration! * 15;
      let finalDate = new Date(
        this.inscription.dateInscription.getFullYear(),
        this.inscription.dateInscription.getMonth(),
        this.inscription.dateInscription.getDate() + day
      );
      this.inscription.dateFinal = finalDate;
    }
    if (this.selectedPrice?.durationType == '4') {
      let anio: number = this.inscription.dateInscription.getFullYear();
      let month: number =
        this.selectedPrice?.duration! +
        this.inscription.dateInscription.getMonth();
      let day: number = this.inscription.dateInscription.getDate();
      let finalDate = new Date(anio, month, day);
      this.inscription.dateFinal = finalDate;
    }
    if (this.selectedPrice?.durationType == '5') {
      let anio: number =
        this.inscription.dateInscription.getFullYear() +
        this.selectedPrice?.duration!;
      let month: number = this.inscription.dateInscription.getMonth();
      let day: number = this.inscription.dateInscription.getDate();
      let finalDate = new Date(anio, month, day);
      this.inscription.dateFinal = finalDate;
    }
  }
}
