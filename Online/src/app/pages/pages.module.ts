import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    CartComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    CartComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ]
})
export class PagesModule { }
