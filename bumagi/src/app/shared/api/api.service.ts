import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Urls } from "./urls.const";
import { Auth } from "../consts/auth.const";
import { UserMock } from "../mocks/user.mock";
import { UserModel } from "../models/user.model";
import { delay } from "rxjs/operators";

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

    // return this.http.get<UserModel[]>(url);
    return of(UserMock).pipe(delay(2000));
  }

  public getUserListByStatus(status: number): Observable<UserModel[]> {
    const url = Urls.users + `?status=${status}`;

    // return this.http.get<UserModel[]>(url);
    return of(UserMock.filter(u => u.status === status)).pipe(delay(2000));
  }
}
