import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DasboardComponent } from './admin/dasboard/dasboard.component';

import { AddListComponent } from './admin/add-list/add-list.component';
import { AllListComponent } from './admin/all-list/all-list.component';
import { AllBookingsComponent } from './admin/all-bookings/all-bookings.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { ListComponent } from './component/list/list.component';
import { BookComponent } from './component/book/book.component';
import { Dash1Component } from './admin/dash1/dash1.component';
import { HomeComponent } from './component/home/home.component';
import { DashComponent } from './component/dash/dash.component';
import { UserbookingsComponent } from './component/userbookings/userbookings.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DasboardComponent,
 
    AddListComponent,
    AllListComponent,
    AllBookingsComponent,
    AllUsersComponent,
    ListComponent,
    BookComponent,
    Dash1Component,
    HomeComponent,
    DashComponent,
    UserbookingsComponent,
 
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
