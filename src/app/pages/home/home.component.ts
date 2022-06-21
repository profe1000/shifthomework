import { Component, OnInit, ViewChild } from '@angular/core'; 
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Use to get the reference of the location component
  @ViewChild('appcont1',{"static":false}) appcont1: any;
  residentid='';

  constructor(public apiservice:ApiservicesService) {
   }

  ngOnInit(): void {
  }

  //This is used to Start the search when you leave the search box
  startsearch($event:any){
    //Check if the textbox is empty
    if($event.target.value ==""){
      this.residentid="";
      return;
    }
    //Check if the text box contains anything apart from number
    if(isNaN($event.target.value )){
      this.residentid="";
      alert("Please Enter a valid Resisdent ID");
      return;
    }

    //If the textbox content is valid set the value of resident ID in the api serivce and call send message to location services to load the current resident details
    this.residentid=$event.target.value;
    this.apiservice.residenceid = this.residentid;
    this.appcont1.getvalue();
  }


  //Use start the Search when you click the button
  startsearchbtn()
  {
     //Check if the textbox is empty
    if(this.residentid==''){
      alert("Enter A resident ID");
      return;
    }
     //If the textbox content is valid set the value of resident ID in the api serivce and call send message to location services to load the current resident details
   
    this.apiservice.residenceid =this.residentid;
    this.appcont1.getvalue();
  }

}
