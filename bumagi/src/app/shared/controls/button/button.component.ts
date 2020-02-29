import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  /** флаг того, что эта кнопка сабмитит форму */
  @Input() isSubmitType = false;

  /** надпись кнопки */
  @Input() label: string | undefined;

  /** флаг выключения активности */
  @Input() disabled: boolean | undefined;

  @Output() clickButton = new EventEmitter();
}
