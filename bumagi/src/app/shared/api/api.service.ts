import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Urls } from "./urls.const";
import { UserModel } from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getUserList(status: number = -1): Observable<UserModel[]> {
    const url =  status < 0 ? Urls.users : `${Urls.users}?status=${status}`;

    return this.http.get<UserModel[]>(url);
  }

  public changeUser(id: number, user: Partial<UserModel>): Observable<any> {
    const url = `${Urls.users}:${id}`;

    return this.http.patch<any>(url, user);
  }
}
