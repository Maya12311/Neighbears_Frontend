import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppComponent } from '../app.component';
import { AppConstants } from '../constants/app.constants';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class NeighbearsService {

private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


public getAllNeighbears(): Observable<string> {
  return this.http.get(`${this.apiServerUrl}`, { responseType: 'text' });
}

public getTest(id:number): Observable<string> {
  return this.http.get(`${this.apiServerUrl}`+AppConstants.TEST_API_URL, {responseType: 'text', withCredentials: true})
}
  }


