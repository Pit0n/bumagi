import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from "./controls/input-text/input-text.component";
import { ButtonComponent } from "./controls/button/button.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PasswordComponent } from './controls/password/password.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';

const components = [
  InputTextComponent,
  ButtonComponent,
  PasswordComponent
];

@NgModule({
  declarations: [...components, TabsComponent, UserListItemComponent],
  exports: [...components, TabsComponent, UserListItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {
}
