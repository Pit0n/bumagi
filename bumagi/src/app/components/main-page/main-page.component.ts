import { Component } from '@angular/core';
import { TabsModel } from "../../shared/models/tabs.model";
import { Tab } from "../../shared/consts/tabs.const";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public tabs: TabsModel[] = Tab;

  user = {
    name: 'Иванов П. Ф.',
    fname: 'Иванов',
    mname: 'Иванович',
    balance: 'Баланс: 1 234.5',
    date: 'Последнее изменение: 10 секунд назад',
    status:  'Подписка активна'
  };

  public selectTab(idx: number): void {
    this.tabs = this.tabs.map((item, index) => ({...item, active: index === idx}));
  }
}
