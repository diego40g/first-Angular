import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.sass']
})
export class ClientAddComponent {
  clientForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
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
}
