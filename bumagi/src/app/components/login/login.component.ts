import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  public submitForm(): void {
    console.log(this.form.getRawValue());
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      login: [''],
      password: ['']
    });
  }
}
