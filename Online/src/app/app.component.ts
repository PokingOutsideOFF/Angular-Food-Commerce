import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'Online';
  
}
