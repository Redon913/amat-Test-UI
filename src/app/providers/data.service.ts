import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

/*
  Generated class for the DataservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  WebBaseurl = "https://localhost:7777";
  getData(url: string): Observable<any> {    
    return this.http.get<any>(url)
  }


  postData(url: string, data: any, header?: HttpHeaders) : Observable<any> {
    return this.http.post<any>(url, data);
  }
  
}