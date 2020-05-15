import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

  export class DataService {

    data:any
    constructor(private baseUrl:String,private http:HttpClient) {
        this.data={}
     }
  
    getAllUser(){
        this.http.get(this.baseUrl+"/consultUser")
                 .subscribe(response=>this.data=response
                 ,error=>console.log(error))        
    }

    getUser(name){
        this.http.get(this.baseUrl+"/consultUser/"+name)
                 .subscribe(response=>this.data=response
                 ,error=>console.log(error))
    }

    refreshData(){
        this.http.get(this.baseUrl+'/consultUser')
          .subscribe(response=>this.data=response)
    }

    deleteUser(value){
       return this.http.delete(this.baseUrl+'/deleteRegistry/'+value)
                 .subscribe(()=>this.refreshData()
                 ,error=>console.log(error))
    }

    registerUser(user){
       return this.http.post(this.baseUrl+'/newRegistry',user)
    }


  
  }
  