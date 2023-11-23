import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.sass']
})
export class ClientAddComponent {
  clientForm!: FormGroup;
  uploadPercentange: number = 0;
  constructor(private fb: FormBuilder, private storage: AngularFireStorage) { }
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
      imageUrl: ['',Validators.required]
    });
  }

  addClient() { 
    console.log(this.clientForm.value);
  }

  addImage(event: any) {
    const fecha = new Date().getTime().toString();
    const file = event.target.files[0];
    const filePath = `clients/${fecha+file.name}`;
    const reference = this.storage.ref(filePath);
    const task = reference.put(file);
    task.then((obj) => {
      console.log('Image uploaded');
      reference.getDownloadURL().subscribe((url) => {
        console.log(url);
        this.clientForm.get('imageUrl')?.setValue(url);
      });
    });
    task.percentageChanges().subscribe((percentage) => {
      this.uploadPercentange = parseInt(percentage!.toString());
    });
  }
}
