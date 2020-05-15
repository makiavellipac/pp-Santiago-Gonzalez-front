import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
      
  constructor(public service:HttpService) { 
    
  }
  

  ngOnInit() {
    this.service.getAllUser()
  }

  deleteElement(value){
    this.service.deleteUser(value)
  }
  refresh(){
    this.service.refreshData()
  }

}
