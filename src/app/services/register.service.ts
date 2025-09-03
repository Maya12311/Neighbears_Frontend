import { RegistrationRequest } from './../model/Registration';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppConstants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUserWithAddress(registrationRequest :RegistrationRequest){
console.log("in the registration service", registrationRequest)
 return this.http.post(environment.apiBaseUrl+AppConstants.REGISTRATION_USER_ADDRESS, registrationRequest, { observe: 'response' , withCredentials: true})
  }
}
