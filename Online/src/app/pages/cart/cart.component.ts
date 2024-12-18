import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: false

})
export class CartComponent {
  cart:any[] = []
  item_price:number = 0
  total:number = 0
  rate:number = 0
  
  url = "http://localhost:3000/cart"

  constructor(private _http:HttpClient){
    this._http.get<any[]>(this.url)
    .subscribe(resp=>{
      this.cart = resp;
      console.log(this.cart);
      this.calculateTotal();
      this.calculatesubtotal();
    }
    );
  }
  ngOnInit() {
    
  }
  
  calculateTotal(){
    console.log("Here")
    for(let i of this.cart){
      this.total += i.price;
    }
  }



  calculatesubtotal(item_id:any = "b188"){
    console.log("Here")
    const item = this.cart.find(item => item.id === item_id);
    this.item_price = item.price;
    this.rate = item.price

  }
  
  increaseQuantity(item_id:any, increment: number=1){
    var it = this.cart.find(item => item.id === item_id);
    console.log(it)
    if(it){
      it.quantity = it.quantity + 1;
      // it.price = this.rate * it.quantity;
      this.total=0
      for(let i of this.cart){
        this.total += (i.price * i.quantity);
      }
      
    }

  }
  decreaseQuantity(item_id:any, decrement: number=1){
    var it = this.cart.find(item => item.id === item_id);
    this.rate = it.price
    console.log("decrease called")

    if(it){
      it.quantity -= decrement;
      // it.price = this.rate * it.quantity
      this.total= 0
      for(let i of this.cart){
        this.total += (i.price * it.quantity);
      }
    }
  }




}
