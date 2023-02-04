import { Component } from '@angular/core';
import { FieryService } from '../service/fiery.service';

@Component({
  selector: 'app-view-order-info',
  templateUrl: './view-order-info.component.html',
  styleUrls: ['./view-order-info.component.css']
})
export class ViewOrderInfoComponent {

  constructor(private api:FieryService){}
  viewOrders:any;
  ngOnInit(): void {
   this.api.getdata().subscribe((data: any): void=>{
        this.viewOrders=data;
      });
}
}

