import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class BaseControl {
  @Input() placeholder = '';
  @Input() controlName = '';
  @Input() parentFormGroup: FormGroup = new FormGroup({});
}
