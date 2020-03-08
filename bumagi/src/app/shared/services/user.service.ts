import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from "rxjs";
import { filter, first, mergeMap, tap } from "rxjs/operators";
import { ApiService } from "../api/api.service";
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userList$ = new BehaviorSubject<UserModel[]>(null);

  private usersSortList: { [key: number]: number } = null;

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
    // this.api.getUserList()
    this.recurringRequest()
      .pipe(
        filter(users => !!users.length),
        tap(this.setUsersSortList)
      )
      .subscribe(res => this.userList$.next(this.sortUsers(res)));
  }

  public changeUser(id: number, user: Partial<UserModel>): void {
    this.api.changeUser(id, user)
      .pipe(first())
      .subscribe();
  }

  private setUsersSortList = (users: UserModel[]): void => {
    if (this.usersSortList) {
      return;
    }

    let usersSortList = {};
    users.forEach((user, idx) => usersSortList[user.id] = idx);
    this.usersSortList = {...usersSortList};
  };

  // TODO: { message: "An error has occurred" }

  private sortUsers = (users: UserModel[]): UserModel[] => {
    const list = users.reduce((prev, cur) => {
      prev[this.usersSortList[cur.id]] = cur;
      return prev;
    }, []);

    return list;
  }

  private recurringRequest = (): Observable<UserModel[]> => interval(5000).pipe(mergeMap(this.userList));

  private userList = (): Observable<UserModel[]> => this.api.getUserList().pipe(first());

}
