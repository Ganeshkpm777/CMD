import { Component } from '@angular/core';
import { FieryService } from '../service/fiery.service';

@Component({
  selector: 'app-view-payments',
  templateUrl: './view-payments.component.html',
  styleUrls: ['./view-payments.component.css']
})
export class ViewPaymentsComponent {
  constructor(private api:FieryService){}
  placedOrders:any;
  ngOnInit(): void {
    this.api.getMake().subscribe((data:any):void =>{
      this.placedOrders = data;
    })
}
}
