import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  Ichristain,
  Iuserdetails,
  Iuserdetailsb,
  Iuserdetailsc,
  Iuserdetailsd,
  IUsertype,
  Religion,
} from 'src/app/services/types.service';

@Injectable({
  providedIn: 'root',
})
export class ApiservicesService {
  //Api Endpoint
  public userendpoint = 'https://api-dev.trysolstice.com/v1/users/me';
  public residenceendpoint = 'https://api-dev.trysolstice.com/v1/households/';

  loadingdata: Boolean = false;

  public residenceid: any = 0;

  //Authorisation key for this api
  public authorization = 'zUKWzuo6UBFT-nu4HVmk';

  constructor(private httpClient: HttpClient) {}

  //An Observable to get Get Users Via HTTP Call
  getusers = new Observable((observer) => {
    const headers = { Authorization: 'Bearer ' + this.authorization + '' };
    this.httpClient
      .get(this.userendpoint, { headers, observe: 'response' })
      .subscribe(
        async (res) => {
          observer.next(res);
          observer.complete();
        },
        (err) => {
          observer.next(err);
          observer.complete();
        }
      );
  });

  //An Observable to get Residence Users Via HTTP Call
  getresidence = new Observable((observer) => {
    const headers = { Authorization: 'Bearer ' + this.authorization + '' };
    this.httpClient
      .get(this.residenceendpoint + '/' + this.residenceid, {
        headers,
        observe: 'response',
      })
      .subscribe(
        async (res) => {
          observer.next(res);
          console.log(res);
        },
        (err) => {
          observer.next(err);
          console.log(err);
        }
      );
  });

  //select top(10) * from tablename where address like '%'+ residenceid +'%'

  //An Alternative Method Observable to get Residence Users Via HTTP Call
  /*
 getlocationalt(locationid:any): Observable<any>{
    return new Observable(observer => {
      const headers  = {'Authorization': 'Bearer ' + this.authorization+'' }
      this.httpClient
      .get(this.residenceendpoint+"/"+locationid,{headers,observe: 'response'})
      .subscribe(async res => {
        observer.next(res)
       }, (err) => {
        observer.next(err)
      });
    });
 }*/

  getuser(input: IUsertype) {
    console.log(input.firstName + ' ' + input.lastName + ' ' + input.age);
  }

  getusera(input: Iuserdetails) {
    console.log(
      input.person.firstName +
        ' ' +
        input.personschool.schoolName +
        ' ' +
        input.test
    );
  }
  getuserb(input: Iuserdetailsb) {
    console.log(
      input.person.firstName +
        ' ' +
        input.personschool.schoolName +
        ' ' +
        input.test +
        '' +
        input.worshiptype
    );
  }

  getuserc(input: Iuserdetailsc<Ichristain>) {
    console.log(
      input.person.firstName +
        ' ' +
        input.personschool.schoolName +
        ' ' +
        input.test +
        '' +
        input.religion.churchName
    );
  }

  getuserd(input: Iuserdetailsd<Religion.Christain>) {
    console.log(
      input.person.firstName +
        ' ' +
        input.personschool.schoolName +
        ' ' +
        input.test +
        '' +
        input.religion.churchName
    );
  }
}
