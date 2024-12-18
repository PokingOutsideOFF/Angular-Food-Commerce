import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false

})
export class LoginComponent implements OnInit {
  path = '../assets/sofa.webp'
  title = "sofa";
  
  uname: string = ""
  pwd: string = ""
  em: string = "" 
  tel: string = ""

  url = "http://localhost:3000/users"
  
  user: any[] = [];
  u: any = {}
  valid: string = ""

  constructor(private _http:HttpClient, private router: Router, private _ts: Title) {
    this._http.get<any[]>(this.url)
      .subscribe(resp=>this.user = resp)
    console.log(this.user)
  }

  ngOnInit(): void {
    this._ts.setTitle('Login')
  }

  validate() {
    console.log(this.user)
    var us: boolean = this.user.find(x => x.username === this.uname && x.password === this.pwd)
    if (us) {
      this.u = this.user.find(x=>x.username === this.uname);
      this.em=this.u.email;
      this.tel=this.u.tel;
      
      localStorage.setItem("uname",this.uname)
      localStorage.setItem("email",this.em)
      localStorage.setItem("tel",this.tel)
      this.router.navigate(['/dashboard']);
    }
    else {
      this.valid = "Invalid"
    }
    this.u = []
  }
}
