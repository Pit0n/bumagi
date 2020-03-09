import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { AuthenticationService } from "../api/authentication.service";
import { AlertService } from "../services/alert.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor {
  constructor(private authenticationService: AuthenticationService, private alert: AlertService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 403) {
        this.authenticationService.logout();
      }

      const error = err.error.message || err.statusText;
      this.alert.openAlert(error);
      return next.handle(request);
    }))
  }
}
