import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRouting} from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './_shared.module/shared.module';
import {ErrorInterceptor, UrlInterceptor} from './_helpers/Interceptors';
import {HomeComponent} from './home.component/home.component';
import {HeaderComponent} from './header.component/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
