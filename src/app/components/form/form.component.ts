import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public name: String;
  public phone:Number;
  public age:Number;
  public genre:String;

  
  
  constructor() { 
    this.name="";
    this.phone=null;
    this.age=null;
    this.genre="";
  }
    
  ngOnInit(): void {
  }

}
