import { DocumentReference } from "@angular/fire/compat/firestore";

export class Price {
    id?: string;
    name?: string;
    cost?: number;
    duration?: number;
    durationType?: string;
    ref?: DocumentReference;
}