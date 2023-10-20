import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';


// paginacion
import { NgxPaginationModule } from 'ngx-pagination';

//paypal
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";

//sharethis
import { SharethisAngularModule } from 'sharethis-angular';

// angular file uploader
import { AngularFileUploaderModule } from 'angular-file-uploader';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    ComponentsModule,
    NgxPayPalModule,
    NgbModule,
    NgxSpinnerModule,
    HttpClientModule,
    AuthModule,
    SharethisAngularModule,
    NgxPaginationModule,
    AngularFileUploaderModule,
    ScrollingModule

  ],
  providers: [
    // httpInterceptorProvidßers,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
