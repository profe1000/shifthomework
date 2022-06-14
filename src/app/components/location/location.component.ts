import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  //This is use to hold the data that is coming from the apiservice
  data:any;
  
  //-2 No Item selected -1 Loading, 200 Success,0 No Internet Connection,  401 Unathorised, 404 Not Found From Testing the Api
  datastatus=-2;


  constructor(public apiservice:ApiservicesService) {
    
  }

 ngOnInit(): void {
 }

 // Get Value by subscribing  from the Observable created at apiservice
 async getvalue(){
  this.datastatus=-1;
   this.apiservice.getresidence.subscribe((val)=>{
     console.log(val)
     this.data = val;
     this.datastatus =  this.data["status"]
   })
 }

}
