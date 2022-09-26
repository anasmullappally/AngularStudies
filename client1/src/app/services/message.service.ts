import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  _apiUrl="http://localhost:7000/form"
  constructor(private http:HttpClient) { }


  submitMsg(data:any){
    return this.http.post<any>(this._apiUrl,data)
  }
}
