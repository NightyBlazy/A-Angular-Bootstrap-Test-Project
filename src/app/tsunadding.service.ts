import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TsunaddingService {
  _url='http://localhost:3000/tsunadd';

  constructor(private _http:HttpClient) { }

  tsunadd(data:any){
    return this._http.post<any>(this._url, data);
  }
}
