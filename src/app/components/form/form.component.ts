import { error } from '@angular/compiler/src/util';
import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  
  
  constructor(private http:HttpClient) { 
    this.name="";
    this.phone=null;
    this.age=null;
    this.genre="";
  }

    
  ngOnInit(): void {
  }
  submit(f){
    const value=f.value
    console.log(value)
    this.http.post('http://localhost:3000/newRegistry',value)
    .subscribe(response=>{
      this.name=""
    })
  }

}
