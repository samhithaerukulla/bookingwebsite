import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
 title="T-Booking"
constructor( private route:Router){}

 onlogout(){

  localStorage.clear()

  this.route.navigate(['/login'])
  alert('logout sucessful')
 }
}
