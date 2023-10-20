import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class imageInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtToken = window.localStorage.getItem('auth_token');

    const requestToHandle = jwtToken
      ? request.clone({
        headers: request.headers.set('authorization', `Bearer ${jwtToken}`)
      })
      : request;
    return next.handle(requestToHandle);
  }
}
