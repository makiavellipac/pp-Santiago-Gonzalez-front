import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  form=new FormGroup({
    name:new FormControl('',[Validators.minLength(3),
                             Validators.maxLength(50),
                             Validators.pattern("^[a-zA-Z ]*$"),
                            Validators.required]),
    phone:new FormControl('',[Validators.min(10000000),
                              Validators.max(99999999999999999999),
                              Validators.required]),
    age:new FormControl('',[Validators.min(1),
                            Validators.max(125),
                            Validators.required]),
    gender:new FormControl('',Validators.required),
  })


  get name(){
    return this.form.get('name');
  }
  get phone(){
    return this.form.get('phone');
  }
  get age(){
    return this.form.get('age');
  }

  post(){
    const {name,phone,age,gender}=this.form.value
    if(name!=="" && phone!=="" && age!=="" && gender!==""){
      const user=this.form.value
      this.http.post('http://localhost:3000/newRegistry',user)
               .subscribe(()=>{
                this.name.setValue("")
                this.phone.setValue("")
                this.age.setValue("")
                this.form.controls.gender.setValue("")
                this.name.setErrors(null)
                this.phone.setErrors(null)
                this.age.setErrors(null)
                alert("User was successfully created")},
                ()=>{
                  this.form.setErrors({
                    invalidResponse:true
                  })
                })
      
    }
    else{
      this.form.setErrors({
        invalidCreate:true
      })  
    }
    
  }
  
  constructor(private http:HttpClient) {}
  ngOnInit(): void {
  }
}
