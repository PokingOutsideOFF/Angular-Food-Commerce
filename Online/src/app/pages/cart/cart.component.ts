import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: false

})
export class CartComponent {
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
