import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResselerserviceService {

  constructor(private http: HttpClient) { }

  getallresselers() {
    let data = this.http.get<any>("http://localhost:3000/customer/getresellers");
    return data;
   
  }
  getAllRessellersWithStatus (status :string) { 
    return this.http.get<any>("http://localhost:3000/customer/getResellerByStatus?status=" +status ) 

  }  
  deleteResseler(id: String) {
    return this.http.delete<any>("http://localhost:3000/customer/delete?id=" + id);
  }  
  getResselerwithid (id :string) { 
    return this.http.get<any>("http://localhost:3000/customer" +id)
  } 
  updateformateur( user : any ){ 
    return this.http.post<any>("http://localhost:3000/customer/modify" , user) 
  }
  
  setStatus( user : any ){ 
    return this.http.post<any>("http://localhost:3000/customer/setStatus" , user) 
  }
}
