import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: false

})
export class CartComponent implements OnInit {
  cart:any[] = []

  total:number = 0
  url = "http://localhost:3000/cart"

  constructor(private _http:HttpClient, private _ts:Title){
    this._http.get<any[]>(this.url)
    .subscribe(resp=>{
      this.cart = resp;
      console.log(this.cart);
      this.calculateTotal();
    }
    );
  }

  ngOnInit(): void {
    this._ts.setTitle('Cart')
  }
  
  calculateTotal(){
    console.log("Here")
    for(let i of this.cart){
      this.total += i.price;
    }
  }





}
