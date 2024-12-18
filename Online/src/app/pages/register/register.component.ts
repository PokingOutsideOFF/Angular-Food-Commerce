import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false

})
export class RegisterComponent {
  path = "../assets/sofa.webp"
  title = "sofa";
  url = "http://localhost:3000/users"

  uname:string = "";
  email:string = "";
  tel?:number;
  pwd:string = ""
  confirm_pwd:string = ""
  msg:string =""

  user:any[] = []
  constructor(private _http:HttpClient, private router:Router){
    this._http.get<any[]>(this.url)
    .subscribe(resp=>this.user = resp)
    console.log(this.user)
  }

  validate(){
    var u1:any = {"username":this.uname,"password":this.pwd,"email":this.email,"tel":this.tel}
  this._http.post(this.url, u1)
  .subscribe((resp:any)=>{
    this.user.push(resp);
    u1={};
  })
  console.log(this.user)
  this.router.navigate(['/login'])
  }
}
