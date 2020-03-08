import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { AuthenticationService } from "../api/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor {
  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authenticationService.currentUserValue;

    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser.token}`
        }
      });
    }

    return next.handle(request);
  }
}
