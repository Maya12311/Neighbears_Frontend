import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environmet } from "../../environments/environment";

@Injectable()
export class AuthService {

  private apiServerUrl = environmet.apiBaseUrl

  constructor(private http: HttpClient){}

  signup(email:string, pwd: string){
   return this.http.post(`${this.apiServerUrl}/register`,
   {
    email: email,
    pwd: pwd,
    role: 'user'
   }
   )
  }
}
