import { Component, OnInit, ViewChild } from '@angular/core'; 
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('appcont1',{"static":false}) appcont1: any;

  constructor(public apiservice:ApiservicesService) {
   }

  ngOnInit(): void {
  }

  
  startsearch($event:any){
    if($event.target.value ==""){
      return;
    }
    if(isNaN($event.target.value )){
      alert("Please Enter a valid Resisdent ID");
      return;
    }
    this.apiservice.residenceid =$event.target.value
    this.appcont1.getvalue();
  }

}
