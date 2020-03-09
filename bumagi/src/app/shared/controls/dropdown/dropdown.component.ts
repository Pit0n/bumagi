import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BaseControl } from "../control-base";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss', '../control-base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent extends BaseControl implements OnInit {
  @Input() options: { id: number, label: string }[];
  public isOpen = false;
  public inputValue = '';

  ngOnInit(): void {
    const control = this.parentFormGroup.controls[this.controlName];
    const options = this.options.find(i => i.id === control.value);
    this.inputValue = options ? options.label : '';
  }

  /** Выбор значения из списка */
  public selectOption(value: any): void {
    this.setControlValue(value);
    this.inputValue = value.label;
    this.isOpen = !this.isOpen;
  }

  /** Установить значение контрола */
  private setControlValue(value: any): void {
    const control = this.parentFormGroup.controls[this.controlName];
    control.setValue(value.id);
    control.markAsDirty();
  }

}
