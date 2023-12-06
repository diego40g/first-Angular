import { DocumentReference } from '@angular/fire/compat/firestore';

export class Client {
  id!: string;
  firstname!: string;
  lastname!: string;
  email!: string;
  identificationCard!: string;
  birthdate!: Date;
  cellphone!: string;
  profilePicture!: string;
  ref!: DocumentReference;
}
