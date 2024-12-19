import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: false
})
export class ProfileComponent implements OnInit {
  una:string='';
  pwd:string='';
  ema:string='';
  tel:string='';
  constructor(private _ts:Title){
    var uname =localStorage.getItem("uname");
    var pass =localStorage.getItem("pass");
    var email =localStorage.getItem("email");
    var tel =localStorage.getItem("tel");
    this.una=`${uname}`;
    this.pwd=`${pass}`;
    this.ema=`${email}`;
    this.tel=`${tel}`;
  }

  ngOnInit(): void {
    this._ts.setTitle('Profile')
  }
}
