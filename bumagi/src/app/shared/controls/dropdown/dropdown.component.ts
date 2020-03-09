import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BaseControl } from "../control-base";
import { SelectorModel } from "../../models/selector.model";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss', '../control-base.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent extends BaseControl implements OnInit {
  @Input() options: SelectorModel[];
  public isOpen = false;
  public inputValue = '';

  ngOnInit(): void {
    const control = this.parentFormGroup.controls[this.controlName];
    const options = this.options.find(i => i.id === control.value);
    this.inputValue = options ? options.label : '';
  }

  /** Выбор значения из списка */
  public selectOption(value: SelectorModel): void {
    this.setControlValue(value.id);
    this.inputValue = value.label;
    this.isOpen = !this.isOpen;
  }

  /** Установить значение контрола */
  private setControlValue(value: number): void {
    const control = this.parentFormGroup.controls[this.controlName];
    control.setValue(value);
    control.markAsDirty();
  }

}
