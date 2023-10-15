import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {

  private myuser:User = new User();


  getUser(){
    return this.myuser;
  }


  constructor(private http:HttpClient ) { } 

  adduser(user: any) {

    return this.http.post<any>("http://localhost:3000/customer/signup", user) ; 
  }
  loginuser(user:any){
    return this.http.post<any>("http://localhost:3000/auth/signin",user) ; 
  }
}


