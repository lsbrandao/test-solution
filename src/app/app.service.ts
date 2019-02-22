import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit {
  arrToSort = new Subject;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendArray(arr) {
    return this.http.get('http://localhost:3000/api/' + arr)
    .subscribe(res => {
      console.log(res);
      this.arrToSort.next(res);
    });
  }
}
