import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore'; // Utiliza 'compat' para mantener compatibilidad con versiones anteriores
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import { AuthComponent } from './auth/auth.component';
import { environment } from 'src/environments/environment.development';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { MessagesService } from './services/messages.service';
import { PricesComponent } from './prices/prices.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ClientSelectComponent } from './client-select/client-select.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    NavbarComponent,
    ClientListComponent,
    ClientAddComponent,
    PricesComponent,
    InscriptionComponent,
    ClientSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
    NgxSpinnerModule,
    ProgressbarModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa Firebase
    AngularFirestoreModule, //Módulo para Firestore (base de datos en tiempo real)
    AngularFireAuthModule, // Módulo para autenticación
    BsDropdownModule.forRoot(),
  ],
  providers: [AngularFireAuth, AngularFirestore, MessagesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
