import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserModel } from "../../models/user.model";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditComponent implements OnInit {
  @Input() editedUser: UserModel;
  @Output() closeForm = new EventEmitter();

  public form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.setFormValue(this.editedUser, this.form);
  }

  public submitForm(): void {
    console.log(this.form.getRawValue());
    this.closeForm.emit();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: [''],
      fname: [''],
      mname: ['']
    });
  }

  private setFormValue({name, fname, mname}: UserModel, {controls}: FormGroup): void {
    controls.name.setValue(name);
    controls.fname.setValue(fname);
    controls.mname.setValue(mname);
  }
}
