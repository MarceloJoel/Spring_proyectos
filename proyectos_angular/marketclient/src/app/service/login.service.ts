import { Injectable } from '@angular/core';

import { Cliente } from '../model/Cliente';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(usr:string, pwd:string):Observable<any>{
    let url:string="http://localhost:8000/autenticar";
    //let heads=new HttpHeaders();
    //heads.set('Content-Type','application/x-www-form-urlencoded');
    let params=new HttpParams();
    params=params.append("usuario",usr);
    params=params.append("password",pwd);
    return this.http.get(url,{params:params});
  }
}
