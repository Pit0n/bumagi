import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from "./controls/input-text/input-text.component";
import { ButtonComponent } from "./controls/button/button.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PasswordComponent } from './controls/password/password.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { ShortFullNamePipe } from './pipes/short-full-name.pipe';
import { CommaToDotPipe } from './pipes/comma-to-dot.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { PopupComponent } from './components/popup/popup.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LastUpdateInSecondsPipe } from './pipes/last-update-in-seconds.pipe';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";

const components = [
  InputTextComponent,
  ButtonComponent,
  PasswordComponent,
  TabsComponent,
  UserListItemComponent,
  LoaderComponent,
  PopupComponent,
  UserEditComponent,
  ShortFullNamePipe,
  CommaToDotPipe,
  LastUpdateInSecondsPipe,
  DropdownComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class SharedModule {
}
