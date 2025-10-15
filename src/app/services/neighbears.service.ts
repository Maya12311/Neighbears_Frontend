import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppComponent } from '../app.component';
import { AppConstants } from '../constants/app.constants';
import { User } from '../model/user';
import { Neighbear } from '../model/neighbear';

@Injectable({
  providedIn: 'root'
})
export class NeighbearsService implements OnInit{

  user = new User()
  xsrf?: any;
  
private apiServerUrl = environment.apiBaseUrl;

ngOnInit(): void {
  this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
  this.xsrf =sessionStorage.getItem('XSRF-Token');

 }

  constructor(private http: HttpClient) { }


  getAllNeighbears() : Observable<Neighbear[]>{
    return this.http.get<Neighbear[]>(environment.apiBaseUrl + AppConstants.NEIGHBEAR_API_URL, { withCredentials: true})
  }

public getTest(id:number): Observable<string> {
  return this.http.get(`${this.apiServerUrl}`+AppConstants.TEST_API_URL, {responseType: 'text', withCredentials: true})
}
  }


