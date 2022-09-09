import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import {
  ISchool,
  Iuserdetails,
  Iuserdetailsb,
  IUsertype,
  Religion,
  Religionconst,
} from 'src/app/services/types.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //Use to get the reference of the location component
  @ViewChild('appcont1', { static: false }) appcont1: any;
  residentid = '';
  data: any;

  newuser: IUsertype = {
    firstName: 'Emmanuel',
    lastName: 'Soligbo',
    age: '30',
  };

  newuserschool: ISchool = {
    schoolName: 'Unique',
    schoolAddress: '21 Universal street',
    numberOfStudent: '20',
  };

  newuserdetails: Iuserdetails = {
    person: this.newuser,
    personschool: this.newuserschool,
    test: 'Helo',
  };
  newuserdetailsb: Iuserdetailsb = {
    person: this.newuser,
    personschool: this.newuserschool,
    test: Religionconst.christain.id,
    worshiptype: Religion.Christain,
  };

  constructor(public apiservice: ApiservicesService) {
    this.apiservice.getuser(this.newuser);
    this.apiservice.getusera(this.newuserdetails);
    this.apiservice.getuserb(this.newuserdetailsb);
  }

  ngOnInit(): void {}

  //This is used to Start the search when you leave the search box
  startsearch($event: any) {
    //Check if the textbox is empty
    if ($event.target.value == '') {
      this.residentid = '';
      return;
    }
    //Check if the text box contains anything apart from number
    if (isNaN($event.target.value)) {
      this.residentid = '';
      alert('Please Enter a valid Resisdent ID');
      return;
    }

    //If the textbox content is valid set the value of resident ID in the api serivce and call send message to location services to load the current resident details
    this.residentid = $event.target.value;
    this.apiservice.residenceid = this.residentid;
    this.appcont1.getvalue();
  }

  //Use start the Search when you click the button
  startsearchbtn() {
    //Check if the textbox is empty
    if (this.residentid == '') {
      alert('Enter A resident ID');
      return;
    }
    //If the textbox content is valid set the value of resident ID in the api serivce and call send message to location services to load the current resident details

    this.apiservice.residenceid = this.residentid;
    this.appcont1.getvalue();
  }

  search() {
    this.appcont1.getvalue();
    this.apiservice.loadingdata = false;
  }

  typesearch() {
    if (!this.apiservice.loadingdata) {
      this.apiservice.loadingdata = true;
      console.log(this.data);
      this.residentid = this.data;
      this.apiservice.residenceid = this.data;
      console.log(this.apiservice.residenceid);
      this.appcont1.getvalue();
      //setTimeout(this.search,1000)
    }

    //this.appcont1.getvalue();
  }
}
