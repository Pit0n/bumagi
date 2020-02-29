import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from "./controls/input-text/input-text.component";
import { ButtonComponent } from "./controls/button/button.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PasswordComponent } from './controls/password/password.component';

const components = [
  InputTextComponent,
  ButtonComponent,
  PasswordComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {
}
