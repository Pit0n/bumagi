import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Urls } from "./urls.const";
import { AuthModel } from "../models/auth.model";

export const testUser: AuthModel = {
  login: 'test@example.com',
  password: '1q2w3e'
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUser: AuthModel;

  constructor(private http: HttpClient) {  }

  public get currentUserValue(): AuthModel {
    return this.currentUser;
  }

  public login(user: AuthModel): Observable<any> {
    const url = Urls.auth;

    return this.http.post<any>(url, testUser, {observe: 'response'})
      .pipe(
        tap(resp => {
          const token = resp.headers.get("Authorization");
          this.currentUser = {...user, token};
        })
      );
  }

  logout() {
    this.currentUser = null;
  }
}
