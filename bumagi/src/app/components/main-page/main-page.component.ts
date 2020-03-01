import { Component } from '@angular/core';
import { TabsModel } from "../../shared/models/tabs.model";
import { Tab } from "../../shared/consts/tabs.const";
import { UserModel } from "../../shared/models/user.model";
import { UserMock } from "../../shared/mocks/user.mock";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public tabs: TabsModel[] = Tab;

  users: UserModel[] = UserMock;

  public selectTab(idx: number): void {
    this.tabs = this.tabs.map((item, index) => ({...item, active: index === idx}));
  }
}
