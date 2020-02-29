import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseControl } from "../control-base";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss', '../control-base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordComponent extends BaseControl  {

  public isPasswordView = false;

  public changeInput(input: any): void {
    input.type = input.type === 'password' ? 'text' : 'password';
    this.isPasswordView = input.type === 'text';
  }
}
