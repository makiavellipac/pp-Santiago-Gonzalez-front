import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
    public data:any[];
  constructor(http:HttpClient) { 
    http.get('http://localhost:3000/consultUser')
      .subscribe(response=>{
        this.data=response.data
      })
  }

  ngOnInit(): void {
  }

}
