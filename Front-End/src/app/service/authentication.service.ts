import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../model/student';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpStudent: HttpClient) { }

  executeAuthentication(username,password){
    let basicAuthHeaderString = `Basic ` + window.btoa(username + `:` + password); // 64

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.httpStudent.get<AuthenticationBean>("http://localhost:8080/basicauth",{headers : header}).pipe(
      map(
        response => {
          sessionStorage.setItem("isRegister",username);
          sessionStorage.setItem("token",basicAuthHeaderString);
          return response;
        }
      )
    );
  }
  getAuthentication(){
    return sessionStorage.getItem("isRegister");
  }
  getToken(){
    if(this.getAuthentication()){
      return sessionStorage.getItem("token");
    }
  }
  isLogin(){
    return !(sessionStorage.getItem('isRegister') == null);
  }

  // tslint:disable-next-line:typedef
  logOut(){
    sessionStorage.removeItem('isRegister');
    sessionStorage.removeItem('token');
  }
}
export class AuthenticationBean{

  constructor(private _message: string) {
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
