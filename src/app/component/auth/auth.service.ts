import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl

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
