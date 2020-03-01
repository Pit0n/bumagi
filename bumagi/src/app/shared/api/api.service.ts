import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Urls } from "./urls.const";
import { Auth } from "../consts/auth.const";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public auth(): Observable<any> {
    const url = Urls.auth;
    const params = new HttpParams({
      fromObject : Auth
    });

    return this.http.post<any>(url, params);
  }
}
