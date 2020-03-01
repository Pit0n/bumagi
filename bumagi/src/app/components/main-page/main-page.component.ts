import { Component } from '@angular/core';
import { TabsModel } from "../../shared/models/tabs.model";
import { Tab } from "../../shared/consts/tabs.const";
import { UserModel } from "../../shared/models/user.model";
import { Observable } from "rxjs";
import { UserService } from "../../shared/services/user.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public tabs: TabsModel[] = Tab;
  public userList$: Observable<UserModel[]> = this.userService.userList$;

  constructor(private userService: UserService) {
    userService.getUserList();
  }

  public trackByFn = (index: number): number => index;

  public selectTab(idx: number): void {
    this.tabs = this.tabs.map((item, index) => ({...item, active: index === idx}));
    this.updateUserList(idx);
  }

  private updateUserList(idx: number): void {
    this.userService.getUserListByStatus(this.tabs[idx].status);
  }
}
