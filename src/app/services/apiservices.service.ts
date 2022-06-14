import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  //Api Endpoint
  public userendpoint = "https://api-dev.trysolstice.com/v1/users/me";
  public residenceendpoint = "https://api-dev.trysolstice.com/v1/households/"


  public residenceid:any =0;

  //Authorisation key for this api
  public authorization="zUKWzuo6UBFT-nu4HVmk";

  constructor(private httpClient: HttpClient) {

   }


   //An Observable to get Get Users Via HTTP Call 
    getusers = new Observable((observer)=>{
    const headers  = {'Authorization': 'Bearer ' + this.authorization+'' }
    this.httpClient
    .get(this.userendpoint,{headers,observe: 'response'})
    .subscribe(async res => {
      observer.next(res)
     }, (err) => {
      observer.next(err)
    });

  })


  //An Observable to get Residence Users Via HTTP Call 
  getresidence = new Observable((observer)=>{
    const headers  = {'Authorization': 'Bearer ' + this.authorization+'' }
    this.httpClient
    .get(this.residenceendpoint+"/"+this.residenceid,{headers,observe: 'response'})
    .subscribe(async res => {
      observer.next(res)
     }, (err) => {
      observer.next(err)
    });

  }) 

}
