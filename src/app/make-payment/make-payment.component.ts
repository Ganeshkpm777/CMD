import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FieryService } from '../service/fiery.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent {
  fetchOrderNo:any = -1;
  constructor(private makePayment: FieryService, private route: ActivatedRoute ) {this.fetchOrderNo = 1; }

  //addCardInfo:any=null;
  addCardInfo = new FormGroup({
    orderNo: new FormControl(this.fetchOrderNo, [Validators.required]),
    creditCardNumber: new FormControl('',[ Validators.required]),
    NameOnCard: new FormControl('', [Validators.required]),
    ExpMonthAndYear: new FormControl('', [Validators.required]),
    CVV: new FormControl('', [Validators.maxLength(3)])
   
  });

  ngOnInit(): void {
    this.fetchOrderNo  = this.route.snapshot.paramMap.get('id');
    
    this.addCardInfo = new FormGroup({
      orderNo: new FormControl(this.fetchOrderNo, [Validators.required]),
      creditCardNumber: new FormControl('',[ Validators.required]),
      NameOnCard: new FormControl('', [Validators.required]),
      ExpMonthAndYear: new FormControl('', [Validators.required]),
      CVV: new FormControl('', [Validators.maxLength(3)])
     
    });
  }

  addOrderCard(){
    console.log("Inside method")
    if (this.addCardInfo.valid)
    {
      console.log(this.addCardInfo.value)
      this.makePayment.postMake(this.addCardInfo.value).subscribe(data=>console.log(data));
      alert("successfully Placed Order")
      this.addCardInfo.reset();

    }
    else
    {
      console.log("invalid form data ")
    }
    
  }
 
}
