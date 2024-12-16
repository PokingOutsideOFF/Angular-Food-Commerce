import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: false
})
export class ProfileComponent {
  una:string='';
  pwd:string='';
  ema:string='';
  tel:string='';
  constructor(){
    var uname =localStorage.getItem("uname");
    var pass =localStorage.getItem("pass");
    var email =localStorage.getItem("email");
    var tel =localStorage.getItem("tel");
    this.una=`${uname}`;
    this.pwd=`${pass}`;
    this.una=`${email}`;
    this.una=`${tel}`;
  }

}
