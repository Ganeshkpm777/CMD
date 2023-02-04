import { Component,OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FieryService } from '../service/fiery.service';




@Component({
  selector: 'app-add-order-info',
  templateUrl: './add-order-info.component.html',
  styleUrls: ['./add-order-info.component.css']
})
export class AddOrderInfoComponent implements OnInit{
  constructor(private orders: FieryService) { }
  addOrderInfo = new FormGroup({
    orderNo: new FormControl('', [Validators.required]),
    contactName: new FormControl('', [Validators.required]),
    orderDate: new FormControl('', [Validators.required]),
    itemsOrdered: new FormControl('', [Validators.required]),
    orderTotal: new FormControl('', [Validators.required]),
    taxTotal: new FormControl('', [Validators.required]),
    grandTotal: new FormControl('', [Validators.required])

  });
  preview: string = '';

  ngOnInit(): void {
  //  this.postDetails();
   }
  save() {
    this.preview = JSON.stringify(this.addOrderInfo.value);
  }
  postDetails() {
    if (this.addOrderInfo.valid)
      this.orders.postdata(this.addOrderInfo.value).subscribe(data=>console.log(data));
      alert("Order Added successfully")
      this.addOrderInfo.reset();
  }  
      
  }




  