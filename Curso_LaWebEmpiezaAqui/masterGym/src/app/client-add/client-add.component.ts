import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.sass']
})
export class ClientAddComponent {
  clientForm!: FormGroup;
  uploadPercentange: number = 0;
  imageUrl: string = '';

  constructor(private fb: FormBuilder, private storage: AngularFireStorage, private db: AngularFirestore) { }
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
  }

  addClient() { 
    this.clientForm.value.profilePicture = this.imageUrl;
    this.clientForm.value.birthdate = new Date(this.clientForm.value.birthdate);
    console.log(this.clientForm.value);
    this.db.collection('clients').add(this.clientForm.value).then((end) => {
      console.log('Adding register');
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
