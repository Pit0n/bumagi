import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from "rxjs";
import { filter, first, mergeMap, tap } from "rxjs/operators";
import { ApiService } from "../api/api.service";
import { UserModel } from "../models/user.model";
import { AlertService } from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userList$ = new BehaviorSubject<UserModel[]>(null);

  private usersSortList: { [key: number]: number } = null;
  private subscribe$ = new Subscription();

  constructor(private api: ApiService, private alert: AlertService) {
  }

  public getUserList(status?: number): void {
    this.stopRequest();
    this.subscribe$ = this.recurringRequest(() => this.userListApi(status))
      .subscribe(users => this.userList$.next(this.sortUsers(users)));
  }

  public changeUser(id: number, user: Partial<UserModel>): void {
    this.api.changeUser(id, user)
      .pipe(first())
      .subscribe();
  }

  public stopRequest(): void {
    this.userList$.next(null);
    this.subscribe$.unsubscribe();
  }

  private setUsersSortList = (users: UserModel[]): void => {
    if (this.usersSortList) {
      return;
    }

    let usersSortList = {};
    users.forEach((user, idx) => usersSortList[user.id] = idx);
    this.usersSortList = {...usersSortList};
  };

  private sortUsers = (users: UserModel[]): UserModel[] => {
    return users.reduce((prev, cur) => {
      prev[this.usersSortList[cur.id]] = cur;
      return prev;
    }, []);
  };

  private showErrorToast = (users: UserModel[]): void => {
    if (users.length || this.userList$.getValue()) {
      return;
    }

    this.alert.openAlert('Сервер не овечает');
  };

  private recurringRequest = requestFn =>
    timer(0, 5000)
      .pipe(
        mergeMap(() => requestFn()),
        tap(this.showErrorToast),
        filter(this.isUsers),
        tap(this.setUsersSortList)
      );

  private userListApi = (status) => this.api.getUserList(status).pipe(first());

  private isUsers = users => !!users.length;
}
