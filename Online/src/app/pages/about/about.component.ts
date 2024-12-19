import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: false

})
export class AboutComponent implements OnInit {
  constructor(private _ts:Title){}

  ngOnInit(): void {
    this._ts.setTitle('About Us')
  }
}
