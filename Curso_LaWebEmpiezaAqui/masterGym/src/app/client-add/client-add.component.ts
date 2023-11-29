import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.sass']
})
export class ClientAddComponent {
  clientForm!: FormGroup;
  uploadPercentange: number = 0;
  imageUrl: string = '';
  isEdit: boolean = false;
  id!: string;

  constructor(
    private fb: FormBuilder, 
    private storage: AngularFireStorage, 
    private db: AngularFirestore,
    private activeRoute: ActivatedRoute,
    private msj: MessagesService
  ) { }

  ngOnInit() {
    console.log(new Date().getTime().toString());
    
    this.clientForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['',Validators.compose([
        Validators.required, Validators.email
      ])],
      identificationCard: [''],
      birthdate: ['',Validators.required],
      cellphone: [''],
      profilePicture: ['',Validators.required]
    });

    this.id = this.activeRoute.snapshot.params['clientId'];
    if(this.id !== undefined) {
      this.isEdit = true;
      this.db.doc<any>('clients/'+this.id).valueChanges().subscribe((client) => {
        this.clientForm.setValue({
          firstname: client.firstname,
          lastname: client.lastname,
          email: client.email,
          birthdate: new Date(client.birthdate.seconds * 1000).toISOString().substring(0, 10),
          cellphone: client.cellphone,
          identificationCard: client.identificationCard,
          profilePicture: '',
        });
        this.imageUrl = client.profilePicture;
      });
    }
  }

  addClient() { 
    this.clientForm.value.profilePicture = this.imageUrl;
    this.clientForm.value.birthdate = new Date(this.clientForm.value.birthdate);
    console.log(this.clientForm.value);
    this.db.collection('clients').add(this.clientForm.value).then((end) => {
      this.msj.messageSuccess('Message', 'Adding was correct');
    }).catch((error) => {
      this.msj.messageError('Error!', `Do you want to continue ${error.message}?`);
    });
  }

  editClient() { 
    this.clientForm.value.profilePicture = this.imageUrl;
    this.clientForm.value.birthdate = new Date(this.clientForm.value.birthdate);
    this.db.doc('clients/'+this.id).update(this.clientForm.value).then((end) => {
      this.msj.messageSuccess('Message', 'Updating was correct');
    }).catch((error) => {
      this.msj.messageError('Error!', `Do you want to continue ${error.message}?`);
    });
  }

  addImage(event: any) {
    if(event.target.files.length > 0) {
      const fecha = new Date().getTime().toString();
      const file = event.target.files[0];
      const filePath = `clients/${fecha+file.name}`;
      const reference = this.storage.ref(filePath);
      const task = reference.put(file);
      task.then((obj) => {
        console.log('Image uploaded');
        reference.getDownloadURL().subscribe((url) => {
          this.imageUrl = url;
        });
      });
      task.percentageChanges().subscribe((percentage) => {
        this.uploadPercentange = parseInt(percentage!.toString());
      });
    }
  }
}
