import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TabsModel } from "../../models/tabs.model";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  @Input() tabs: TabsModel[];

  @Output() selectTab = new EventEmitter();

  public select = (idx: number): void => this.selectTab.emit(idx);

  public trackByFn = (index: number): number => index;
}
