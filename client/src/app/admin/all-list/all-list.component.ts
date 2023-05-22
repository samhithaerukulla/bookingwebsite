import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent {
  List: any[] = [];
  public isLoading = false

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.isLoading = true
    this.http.get<any[]>('http://localhost:3000/alllist').subscribe(
      lists => {
        this.List = lists;
        
        this.isLoading = false
      },
      error => {
        console.error(error);
      }
    );
  }

}
