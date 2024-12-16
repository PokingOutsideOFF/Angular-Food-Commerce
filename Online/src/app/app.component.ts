import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd,Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header.component';
import { PagesModule } from "./pages/pages.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ComponentsModule } from './components/components.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
  standalone: false

})
export class AppComponent implements OnInit{
  title = 'Online';

  showHeaderFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showHeaderFooter = !['/login', '/register'].includes(event.urlAfterRedirects);
    });
  }
  
}
