import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Status } from "../../consts/status.const";

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent  {
  @Input() user;
  public status = Status;
}
