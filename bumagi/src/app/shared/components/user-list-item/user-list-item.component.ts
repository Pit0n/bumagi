import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Status } from "../../consts/status.const";
import { UserModel } from "../../models/user.model";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent {
  @Input() user: UserModel;
  public status = Status;
  public baseUrl = environment.baseUrl;
  public itemPluralMapping = {'one': 'секунду', 'few': 'секунды', 'other': 'секунд'};
}
