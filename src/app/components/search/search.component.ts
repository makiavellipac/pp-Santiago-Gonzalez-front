import { HttpService } from './../../services/http.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form=new FormGroup({
    search:new FormControl('',[Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern("^[a-zA-Z ]*$"),
      Validators.required])}
  )
  
  constructor(public service:HttpService) { }
    searchUser(){
      this.service.getUser(this.form.value.search)
    }
  ngOnInit(): void {
  }

}
