import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from "../model/user"
import { environment } from '../../environments/environment';
import { AppConstants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

   }

   validateLoginDetails(user: User ){
    window.sessionStorage.setItem("userdetails", JSON.stringify(user));
    return this.http.get(environment.apiBaseUrl + AppConstants.LOGIN_API_URL,  {observe: 'response', withCredentials: true});
   }


   logout(){
    return this.http.post(environment.apiBaseUrl + AppConstants.LOGOUT_API_URL, {withCredentials: true});
   }


}
