import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { first, tap } from "rxjs/operators";
import { ApiService } from "../api/api.service";
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userList$ = new BehaviorSubject<UserModel[]>(null);

  constructor(private api: ApiService) {
  }

  public getUserListByStatus(status: number): void {
    if (status < 0) {
      this.getUserList();
      return;
    }

    this.userList$.next(null);
    this.api.getUserListByStatus(status)
      .pipe(first())
      .subscribe(res => this.userList$.next(res));
  }

  public getUserList(): void {
    this.userList$.next(null);
    this.api.getUserList()
      .pipe(first())
      .subscribe(res => this.userList$.next(res));
  }

}
