import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  users = new Array<User>(
    new User('sh', '1234', 'shrey@gmail.com', 9999999991),
    new User('vp', '1234', 'shrey@gmail.com', 9999999991),
    new User('ss', '1234', 'shrey@gmail.com', 9999999991),    
  )
  constructor() { }
}
