import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   //This is use to hold the data that is coming from the apiservice
   data:any;
  
   //-1 Loading, 200 Success,0 No Internet Connection,  401 Unathorised, 404 Not Found From Testing the Api
   datastatus=-1;


   constructor(public apiservice:ApiservicesService) {
     this.getvalue();
   }

  ngOnInit(): void {
  }


 // Get Users data Value by subscribing  from the Observable created at apiservice
  async getvalue(){
    this.datastatus=-1;
    this.apiservice.getusers.subscribe((val)=>{
      //console.log(val)
      this.data = val;
      this.datastatus =  this.data["status"]
    })
  }

}
