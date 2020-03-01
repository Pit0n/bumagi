import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Urls } from "./urls.const";
import { UserMock } from "../mocks/user.mock";
import { UserModel } from "../models/user.model";
import { delay } from "rxjs/operators";
import { AuthModel } from "../models/auth.model";

export const testUser: AuthModel = {
  login: 'test@example.com',
  password: '1q2w3e'
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public auth(user: AuthModel): Observable<any> {
    const url = Urls.auth;
    const params = new HttpParams()
      .set('login', testUser.login)
      .set('password', testUser.password);

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

  public changeUser(id: number, user: Partial<UserModel>): Observable<any> {
    const url = Urls.users + `:${id}`;

    return this.http.patch<any>(url, user);
  }
}
