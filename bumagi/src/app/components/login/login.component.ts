import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { first } from "rxjs/operators";
import { ApiService } from "../../shared/api/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
  }

  ngOnInit() {
    this.initForm();
  }

  public submitForm(): void {
    const user = this.form.getRawValue();

    this.api.auth(user).pipe(first())
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      login: [''],
      password: ['']
    });
  }
}
