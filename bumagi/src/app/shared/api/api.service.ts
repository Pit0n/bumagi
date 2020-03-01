import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Urls } from "./urls.const";
import { Auth } from "../consts/auth.const";
import { UserMock } from "../mocks/user.mock";
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public auth(): Observable<any> {
    const url = Urls.auth;
    const params = new HttpParams({
      fromObject: Auth
    });

    return this.http.post<any>(url, params);
  }

  public getUserList(): Observable<UserModel[]> {
    const url = Urls.users;

    return of(UserMock);
  }

  public getUserListByStatus(status: number): Observable<UserModel[]> {
    const url = Urls.users;
    const params = new HttpParams()
      .set('status', String(status));

    return of(UserMock.filter(u => u.status === status));
  }
}
