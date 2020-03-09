import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserModel } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { StatusSelector } from "../../consts/status.const";

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
  public options = StatusSelector;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.initForm();
    this.setFormValue(this.editedUser, this.form);
  }

  public submitForm(): void {
    const user = this.form.getRawValue();

    this.userService.changeUser(this.editedUser.id, user);
    this.closeForm.emit();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: [''],
      fname: [''],
      mname: [''],
      status: [],
    });
  }

  private setFormValue({name, fname, mname, status}: UserModel, {controls}: FormGroup): void {
    controls.name.setValue(name);
    controls.fname.setValue(fname);
    controls.mname.setValue(mname);
    controls.status.setValue(status);
  }
}
