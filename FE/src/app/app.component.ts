import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  messageToSend = '';
  messageReceived = '';



  constructor(private http: HttpClient) { } // Inject HttpClient here



  sendMessage(): void {
    this.http.post<string>('http://localhost:8080/hello', this.messageToSend, {responseType: 'text' as 'json'}).subscribe(message => {
      this.messageReceived = message;
    });
  }
}
