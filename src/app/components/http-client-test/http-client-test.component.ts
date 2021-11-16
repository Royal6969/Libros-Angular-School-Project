import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-client-test',
  templateUrl: './http-client-test.component.html',
  styleUrls: ['./http-client-test.component.css']
})
export class HttpClientTestComponent implements OnInit {

  resultadoPeticion: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => { 
        this.resultadoPeticion = data; 
      });
  }
    
  post() {
    this.httpClient.post('https://jsonplaceholder.typicode.com/posts',
      {
        title: 'Previsión Viernes.',
        body: 'Parcialmente soleado.',
        userId: 1
      })
      .subscribe((data) => { 
        // this.resultadoPeticion = data;
        
        this.resultadoPeticion = [];
        this.resultadoPeticion.push(data);
      });
  }
   
}
