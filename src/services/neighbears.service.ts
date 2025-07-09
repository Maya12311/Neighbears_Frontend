import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmet } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NeighbearsService {

private apiServerUrl = environmet.apiBaseUrl;

  constructor(private http: HttpClient) { }


public getAllNeighbears(): Observable<string> {
  return this.http.get(`${this.apiServerUrl}/profile`, { responseType: 'text' });
}
  }


