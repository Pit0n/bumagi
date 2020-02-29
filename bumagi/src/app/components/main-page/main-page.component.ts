import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormsBase } from "../../shared/forms/forms-base";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent extends FormsBase implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: [''],
      password: ['']
    });
  }
}
