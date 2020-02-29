import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from "../components/main-page/main-page.component";
import { LoginComponent } from "../components/login/login.component";


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
