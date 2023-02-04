import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class FieryService {

   constructor(private http:HttpClient) { }
  // Orders
  postdata(data: any){
   return this.http.post('https://prickly-knickers-boa.cyclic.app/Orders/', data);
      }
  getdata(){
    return this.http.get('https://prickly-knickers-boa.cyclic.app/Orders')
  }

  //Payment
  getMake(){
    return this.http.get('https://prickly-knickers-boa.cyclic.app/Payments')
  }
  postMake(data:any){
   return this.http.post('https://prickly-knickers-boa.cyclic.app/Payments/',data);
  
    }
}
