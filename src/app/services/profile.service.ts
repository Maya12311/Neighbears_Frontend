import { SelfDescripton } from './../model/selfDescription';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppConstants } from '../constants/app.constants';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit{
 user = new User()
 xsrf?: any;
  constructor( private http: HttpClient) { }

 ngOnInit(): void {
  this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
  this.xsrf =sessionStorage.getItem('XSRF-Token');

 }

saveSelfDescription(selfDescripton: SelfDescripton){
  this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
  this.xsrf =sessionStorage.getItem('XSRF-TOKEN');

  //window.sessionStorage.setItem("userdetails", JSON.stringify(this.user));
  //window.sessionStorage.setItem("XSRF-TOKEN", this.xsrf);

  return this.http.post(environment.apiBaseUrl + AppConstants.PROFILE_API_URL, selfDescripton, {observe: 'response', withCredentials: true} )
}

loadDescription(){
 
return this.http.get<SelfDescripton>(environment.apiBaseUrl+ AppConstants.PROFILE_API_URL ,{observe: 'response', withCredentials: true})
}

changeDescription(selfDescription:  SelfDescripton){

  return this.http.put<SelfDescripton>(environment.apiBaseUrl + AppConstants.PROFILE_API_URL, selfDescription, {observe: 'response', withCredentials: true})
}

}
