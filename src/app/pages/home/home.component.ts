import { Component, OnInit, ViewChild } from '@angular/core'; 
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('appcont1',{"static":false}) appcont1: any;
  residentid='';

  constructor(public apiservice:ApiservicesService) {
   }

  ngOnInit(): void {
  }

  
  startsearch($event:any){
    if($event.target.value ==""){
      this.residentid="";
      return;
    }
    if(isNaN($event.target.value )){
      this.residentid="";
      alert("Please Enter a valid Resisdent ID");
      return;
    }
    this.residentid=$event.target.value;
    this.apiservice.residenceid = this.residentid;
    this.appcont1.getvalue();
  }

  startsearchbtn()
  {
    if(this.residentid==''){
      alert("Enter A resident ID");
      return;
    }
    this.apiservice.residenceid =this.residentid;
    this.appcont1.getvalue();
  }

}
