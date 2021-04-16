import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBaseAuthServiceService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userName = `smsm`;
    let password = `smsm`;
    let basicAuthHeaderString = `Basic ` + window.btoa(userName + `:` + password); // 64

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })
    return next.handle(request);
  }


}
