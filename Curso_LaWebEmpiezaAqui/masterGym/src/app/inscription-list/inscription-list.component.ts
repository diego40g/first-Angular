import { Component } from '@angular/core';
import { Inscription } from '../models/inscription';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-inscription-list',
  templateUrl: './inscription-list.component.html',
  styleUrls: ['./inscription-list.component.sass']
})
export class InscriptionListComponent {
  inscriptions: Inscription[] = [];
  constructor(private db: AngularFirestore) { }
}
