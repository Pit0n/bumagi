import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabsModel } from "../../shared/models/tabs.model";
import { Tab } from "../../shared/consts/tabs.const";
import { UserModel } from "../../shared/models/user.model";
import { Observable } from "rxjs";
import { UserService } from "../../shared/services/user.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  public tabs: TabsModel[] = Tab;
  public userList$: Observable<UserModel[]> = this.userService.userList$;
  public showPopup: boolean = false;
  public editedUser: UserModel;

  constructor(private userService: UserService) {
    userService.getUserList();
  }

  public trackByFn = (index: number): number => index;

  public selectTab(idx: number): void {
    this.tabs = this.tabs.map((item, index) => ({...item, active: index === idx}));
    this.updateUserList(idx);
  }

  public editUser(user: UserModel): void {
    this.editedUser = user;
    this.showPopup = true;
  }

  public closePopup(): void {
    this.editedUser = null;
    this.showPopup = false;
  }

  private updateUserList(idx: number): void {
    this.userService.getUserListByStatus(this.tabs[idx].status);
  }
}
