import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from "@angular/common";

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { JwtInterceptor } from "./shared/helpers/jwt.interceptor";
import { ErrorInterceptor } from "./shared/helpers/error.interceptor";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeRu, 'ru', );

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    NoopAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
