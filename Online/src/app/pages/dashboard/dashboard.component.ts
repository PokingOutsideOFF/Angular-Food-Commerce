import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false
})
export class DashboardComponent {
  username: string = ""
  tel:number = 0;
  email:string = ""
  constructor(private route: ActivatedRoute){  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('Params:', params); 
      this.username = params['user'];
      this.tel = params['tel'];
      this.email = params['email']
    }); 
  }
  
}
