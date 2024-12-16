import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false

})
export class LoginComponent {
  path = '../assets/sofa.webp'
  title="sofa";
  u:any = []
  user: any[] =[];
  uname:string = ""
  pwd:string = ""
  valid:string = ""

  constructor(private _ls:LoginServiceService, private router:Router){
    this.user = _ls.users;
  }
  
  validate(){

    console.log(this.user)
    console.log(this.uname)
    if(this.user.find(x=>x.username === this.uname)){
      this.u = this.user.find(x=>x.username === this.uname);
      console.log(this.u)
      if(this.u.password === this.pwd){
        this.valid = "Valid"
        this.router.navigate(['/dashboard',{user: this.u.username, tel: this.u.tel, email: this.u.email}]);
      }
      else{
        this.valid= "Invalid"
      }
    }

    else{
      this.valid= "Invalid"
    }
    this.u = []
  }
}
