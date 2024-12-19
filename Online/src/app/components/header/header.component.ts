import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cart:any[] =[]
  noOfItems:number = 0;
  
  url = "http://localhost:3000/cart"
  constructor(private router:Router, private _http:HttpClient){
    this._http.get<any[]>(this.url)
    .subscribe(resp => {
      this.cart = resp;
      this.cartSize();
    })
  }

  cartSize(){
    this.noOfItems = this.cart.length;
  }

  logout(){
    this.router.navigate(['/login']);
  }
}
