import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent implements OnInit{

  url:string = "http://localhost:3000/cart"
  una:string='';
  pwd:string='';
  ema:string='';
  tel:string='';

  cart:any[] = []

  constructor(private _http:HttpClient, private _ts: Title){
    var uname =localStorage.getItem("uname");
    this.una=`${uname}`;
  }

  ngOnInit():void{
    this._ts.setTitle('Furlenco')
  }

  addToCart(item:string,price:number){
    // var order=new Orders(this.una, item, price, 1)
    var cartItem:any = {"username":this.una,"item":item, "price": price, "quantity": 1}
    // this._cs.cart.push(order)
    // console.log(this._cs.cart)
    this._http.post(this.url, cartItem)
    .subscribe((resp:any)=> {
      this.cart.push(cartItem);
      cartItem = {};
    })
  }
}
