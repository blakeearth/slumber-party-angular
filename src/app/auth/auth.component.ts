import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  http: HttpClient;

  constructor(http: HttpClient) { 
    this.http = http;
  }

  ngOnInit(): void {
    this.http.get('https://websocket.tasklodge.com:8443/', {responseType: 'text'}).subscribe(data => {});
  }

}
