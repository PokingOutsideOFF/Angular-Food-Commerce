import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: false

})
export class ContactComponent implements OnInit{
  constructor(private _ts:Title){}

  ngOnInit(): void {
    this._ts.setTitle('Contact Us')
  }
}
