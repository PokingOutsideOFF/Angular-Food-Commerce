import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  constructor(private _ts:Title){}
  
    ngOnInit(): void {
      this._ts.setTitle('Shop')
    }

    
}
