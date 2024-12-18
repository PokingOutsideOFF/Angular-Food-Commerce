import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false

})
export class RegisterComponent implements OnInit {
  path = "../assets/sofa.webp"
  title = "sofa";
  url = "http://localhost:3000/users"
  myForm: FormGroup
  submitted:boolean = false

  uname:string = "";
  email:string = "";
  tel?:number;
  pwd:string = ""
  confirm_pwd:string = ""
  msg:string =""

  user:any[] = []
  constructor(private _http:HttpClient, private router:Router, private _ts:Title, private fb:FormBuilder){
    this._http.get<any[]>(this.url)
    .subscribe(resp=>this.user = resp)
    console.log(this.user)

    this.myForm = fb.group({
      username:['',[Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      tel: ['', [Validators.required, Validators.pattern('^\\+?91?\\d{10}$')]],
      pwd:['',[Validators.required], [Validators.minLength(6)]],
      confirmpwd:['',[Validators.required]],
    })

  }

  ngOnInit(): void {
    this._ts.setTitle('Register')
  }

  get f(){ return this.myForm.controls;}

  onSubmit(){
    this.submitted = true;
    if(this.myForm.invalid){
      return;
    }

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
