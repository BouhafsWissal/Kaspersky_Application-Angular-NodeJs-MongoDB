import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ServiceuserService } from '../../../Shared/Services/serviceuser.service';
import { User } from '../../../Shared/Models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm : FormGroup
  constructor(private fb:FormBuilder , private userservice : ServiceuserService , private router : Router,private toastr: ToastrService) {
    let formconrols = {  
  
       email :new FormControl(), 
       password:new FormControl() 

    } ;
    this.myForm= this.fb.group(formconrols)

   }

  ngOnInit(): void {
  }
  loginUser()
  { 
  
    let data = this.myForm.value ; 
    let user = {
      Email : data.email,
      Password :data.password
    };
    console.log(user);
    this.userservice.loginuser(user).subscribe(
     res=>{
      this.toastr.success("Welcome");
      this.router.navigate(['/Home']) ;  
    }, 
    err=>{
      console.log(err.error.Error) ; 
      this.toastr.error(err.error.Error)
    }
    ) 
    
  }
}
