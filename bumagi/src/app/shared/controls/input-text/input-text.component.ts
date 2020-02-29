import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseControl } from '../control-base';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss', '../control-base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends BaseControl {
}
