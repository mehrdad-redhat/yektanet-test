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
import { SinglePageComponent } from './single-page.component/single-page.component';
import { SideBarComponent } from './side-bar.component/side-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsGateway} from './app.gateway';
import {ProductsService} from './app.service';
import { CardComponent } from './card.component/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SinglePageComponent,
    SideBarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    },
    ProductsGateway,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
