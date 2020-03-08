import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../shared/api/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  public submitForm(): void {
    const user = this.form.getRawValue();

    this.authenticationService.login(user)
      .pipe(first())
      .subscribe(_ => this.router.navigate(['/']));
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      login: [''],
      password: ['']
    });
  }
}
