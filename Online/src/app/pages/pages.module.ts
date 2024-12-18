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
import { ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    CartComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent,
    ShopComponent,
    // FooterComponent,
    // HeaderComponent
    ProfileComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    CartComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    // FooterComponent,
    // HeaderComponent,
    ProfileComponent,
    CheckoutComponent
  ]
})
export class PagesModule { }
