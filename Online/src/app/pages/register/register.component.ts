import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false

})
export class RegisterComponent {
  path = "../assets/sofa.webp"
  title = "sofa";

  uname:string = "";
  email:string = "";
  tel:number = 0;
  pwd:string = ""
  confirm_pwd:string = ""
  msg:string =""

  user:any[] = []
  constructor(private ls: LoginServiceService, private router:Router){
    this.user = this.ls.users;
  }

  validate(){
    // if(this.uname.length == 0 || this.email.length==0||this.tel==0||)
    this.addUser();
  }

  addUser(){
    var u1 = new User(this.uname, this.pwd, this.email, this.tel);
    console.log(u1)
    this.user.push(u1)
    this.router.navigate(['/login'])
  }
}
