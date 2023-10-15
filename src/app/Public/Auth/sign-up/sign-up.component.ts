import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ServiceuserService } from '../../../Shared/Services/serviceuser.service';
import { User } from '../../../Shared/Models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myForm : FormGroup

  constructor(private fb:FormBuilder , private userservice : ServiceuserService , private router : Router,private toastr: ToastrService) {
    let formconrols = {  
      fullName : new FormControl(),
      email: new FormControl() ,
      password: new FormControl() ,
      companyName: new FormControl() ,
      companyEmail: new FormControl() ,
      companyPhone : new FormControl() ,
      addressLine1:new FormControl() ,
      addressLine2:new FormControl() ,
      city:new FormControl() ,
      state:new FormControl() ,
      zip:new FormControl() ,
      country:new FormControl() 


    } 
    this.myForm= this.fb.group(formconrols)
   } ; 

  ngOnInit(): void {
  }
  OnFileSelected(event: any){
    console.log(event);
    
  }
  saveUser()
{ 
  console.log(this.myForm.value)
  let data = this.myForm.value ; 
  console.log(data);
  
  let user = {
    informations : {
    FullName : data.fullName,
    Email: data.email,
    Password: data.password
    },
    contact : {
    CompanyName: data.companyName,
    Email: data.companyEmail ,
    Phone : data.companyPhone 
    },
    adress :{
    AddressLine1:data.addressLine1,
    AddressLine2:data.addressLine2 ,
    City:data.city,
    State:data.state ,
    Zip:data.zip ,
    Country:data.country
    }
  }  

  console.log(user) ;  
  this.userservice.adduser(user).subscribe(
   res=>{ 
    this.toastr.success("The Account has ben created!");
    // this.router.navigate(['/login']) ; 
    setTimeout(()=>{ this.router.navigate(['/login']) ;  }, 4000)
    
  }, 
  err=>{
    console.log(err) ; 
    this.toastr.error(err.error.Error)
    setTimeout(()=>{ window.location.reload();  }, 4000)
  }
  )
}

}
