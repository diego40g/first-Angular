import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from '../services/messages.service';
import { Price } from '../models/price';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.sass']
})
export class PricesComponent {
  priceForm!: FormGroup;
  prices: Price[] = new Array<Price>();
  isEdit: boolean = false;
  id: string = "";

  constructor(
    private fb: FormBuilder, 
    private db: AngularFirestore,
    private msj: MessagesService,
  ) { }

  ngOnInit() {
    this.priceForm = this.fb.group({
      name: ['', Validators.required],
      cost: ['', Validators.required],
      duration: ['', Validators.required],
      durationType: ['', Validators.required],
    });

    this.getPrices();
  }

  getPrices(){
    this.db.collection<Price>('prices').get().subscribe((res)=>{
      this.prices.length = 0;
      res.docs.forEach((item)=>{
        let price: Price = item.data() as Price;
        price.id = item.id;
        price.ref = item.ref;
        this.prices.push(price);
      });
    });
  }

  addPlan() {
    this.db.collection<Price>('prices').add(this.priceForm.value).then(()=>{
      this.msj.messageSuccess("Add","The plan was added successfully");
      this.priceForm.reset();
      this.getPrices();
    }).catch(()=>{
      this.msj.messageError("Error","There was an error adding the plan");
    });
  }

  editPlan(){
    this.db.doc('prices/'+this.id).update(this.priceForm.value).then(()=>{
      this.msj.messageSuccess("Edit","The plan was edited successfully");
      this.priceForm.reset();
      this.isEdit = false;
      this.getPrices();
    }).catch(()=>{
      this.msj.messageError("Error","There was an error editing the plan");
    })
  }

  editPrice(price: Price){
    this.isEdit = true;
    this.priceForm.setValue({
      name: price.name,
      cost: price.cost,
      duration: price.duration,
      durationType: price.durationType,
    });
    this.id = price.id!;
  }
}
