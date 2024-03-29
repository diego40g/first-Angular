import { Component } from '@angular/core';
import { Inscription } from '../models/inscription';
import { Client } from '../models/client';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Price } from '../models/price';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.sass'],
})
export class InscriptionComponent {
  IVA_VALUE = 0.12;
  inscription: Inscription = new Inscription();
  selectedClient: Client = new Client();
  selectedPrice: Price | undefined = new Price();
  idPrice: string = 'null';
  prices: Price[] = new Array<Price>();

  constructor(private db: AngularFirestore, private msj: MessagesService) {}

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
    if (this.inscription.validate().isValid) {
      let addInscription: any = {
        dateInscription: this.inscription.dateInscription,
        dateFinal: this.inscription.dateFinal,
        client: this.inscription.client,
        price: this.inscription.price,
        subTotal: this.inscription.subTotal,
        iva: this.inscription.iva,
        total: this.inscription.total,
      };
      this.db
        .collection('inscriptions')
        .add(addInscription)
        .then((result) => {
          this.inscription = new Inscription();
          this.selectedClient = new Client();
          this.selectedPrice = new Price();
          this.idPrice = 'null';
          this.msj.messageSuccess('Save', 'The cliente was saved successfully');
        })
        .catch((error) => {
          this.msj.messageError('Error', error);
        });
    } else {
      this.msj.messageWarning(
        'Validated form',
        this.inscription.validate().message
      );
    }
  }

  selectPrice(evento: any) {
    const id = (evento.target as HTMLInputElement)?.value;
    if (id != null) {
      this.selectedPrice = this.prices.find((x) => x.id == id);
      this.inscription.price = this.selectedPrice?.ref!;

      this.inscription.subTotal = this.selectedPrice?.cost!;
      this.inscription.iva = this.inscription?.subTotal * this.IVA_VALUE;
      this.inscription.total = this.inscription.subTotal + this.inscription.iva;

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
    } else {
      this.selectedPrice = new Price();
      this.inscription.dateInscription = null;
      this.inscription.dateFinal = null;
      this.inscription.price = null;
      this.inscription.subTotal = 0;
      this.inscription.iva = 0;
      this.inscription.total = 0;
    }
  }
}
