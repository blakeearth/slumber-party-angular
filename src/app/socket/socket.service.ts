import { Injectable, OnInit } from '@angular/core';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: WebSocketSubject<any>;

  replySource: Subject<any>;
  public reply: Observable<any>;

  httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.replySource = new Subject<any>();
    this.reply = this.replySource.asObservable();
    this.establishWebsocket();
  }

  establishWebsocket() {
    this.socket = webSocket('wss://websocket.tasklodge.com');

    this.socket.subscribe(
      msg => this.setResponse(msg),
      err => console.log(err),
      () => console.log('complete')
    );
  }

  setResponse(msg: any) {
    this.replySource.next(msg);
  }

  sendMessage(msg: any): void {
    this.socket.next(msg);
  }
}
