import { Component, OnInit } from '@angular/core';
import { ResselerserviceService } from 'src/app/resselerservice.service';

@Component({
  selector: 'app-resellers',
  templateUrl: './resellers.component.html',
  styleUrls: ['./resellers.component.css']
})
export class ResellersComponent implements OnInit {

  listeresellers:any = [];
  status!: string; 
  itemToUpdate:any;
  nom: string = "";
  email: string = "";
  ville: string = "";



  constructor(private servicereseller: ResselerserviceService) { }

  selectedDevice:string = "";

  onChange(event:string){
    if(event !== ""){
    this.selectedDevice=event;
    this.servicereseller.getAllRessellersWithStatus(event).subscribe(
      (  result => { 
         this.listeresellers = result;
          console.log(result)
        }))
      }else{
        this.servicereseller.getallresselers().subscribe(
          (  result => { 
             this.listeresellers = result;
              console.log(result)
            })
        )
      }

    }

    updateItem(item:any){
      this.itemToUpdate=item;
    }


    changeStatus(item:any){
      let data:any = {
        "email": item.Informations.Email
    }
    if(item.Informations.Status == "OnHold" || item.Informations.Status == "Blocked"){
      data.status = "Active"
    }else{
      data.status = "Blocked"
    }


      this.servicereseller.setStatus(data).subscribe(
        result => {
          console.log(result)
          this.refrech(); 
        
        },
        errors => { console.log(errors); }
      )
    }


    deleteResseler(item: any) {

      console.log("id : ",item._id)
      
      this.servicereseller.deleteResseler(item._id).subscribe(
        result => {
          console.log(result)
          this.refrech(); 
        
        },
        errors => { console.log(errors); }
      )
    }



    modifyResseler() {
      let data:any = {'contact': {
        "CompanyName":this.itemToUpdate.Contacts.CompanyName
      },
      'adress':{"City":this.ville},
      "informations":{
        "Email":this.email,
        "FullName":this.nom
      }
    
    }

      this.servicereseller.updateformateur(data).subscribe(
        result => {
          console.log(result)
          this.refrech(); 
        
        },
        errors => { console.log(errors); }
      )
      
    }


  ngOnInit(): void {
this.refrech();
    



  }

  refrech(){
    this.servicereseller.getallresselers().subscribe(
      (  result => { 
         this.listeresellers = result;
          console.log(result)
        })
    )
  }
  
  

}
