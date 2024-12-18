import { Component } from '@angular/core';
import { HttpEvent } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cart:any[] = []
  total:number = 0
  url = "http://localhost:3000/cart"
  constructor(private _http:HttpClient){
    this._http.get<any[]>(this.url)
    .subscribe(resp=>{
      this.cart = resp;
      console.log(this.cart);
      this.calculateTotal();
    }
    );
  }
  calculateTotal(){
    console.log("Here")
    for(let i of this.cart){
      this.total += i.price;
    }
  }


}
