import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Orders } from '../orders';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {

  una:string='';
  pwd:string='';
  ema:string='';
  tel:string='';

  constructor(private _cs:CartService ){

    var uname =localStorage.getItem("uname");
    // var pass =localStorage.getItem("pass");
    // var email =localStorage.getItem("email");
    // var tel =localStorage.getItem("tel");
    this.una=`${uname}`;
    // this.pwd=`${pass}`;
    // this.ema=`${email}`;
    // this.tel=`${tel}`;
  // username: string = ""
  // tel:number = 0;
  // email:string = ""
  // constructor(private route: ActivatedRoute){  }
  
  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     console.log('Params:', params); 
  //     this.username = params['user'];
  //     this.tel = params['tel'];
  //     this.email = params['email']
  //   }); 
  // }
  }
  addToCart(item:string,price:number){
    var order=new Orders(this.una, item, price, 1)
    this._cs.cart.push(order)
    console.log(this._cs.cart)
  }
}
