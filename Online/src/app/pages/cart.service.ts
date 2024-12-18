import { Injectable } from '@angular/core';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new Array<Orders>( )
  constructor() { }
}
