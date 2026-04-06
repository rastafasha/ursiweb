import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';

import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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
import { TranslateModule, TranslateLoader, TranslateService, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';


export function cargarTraductor(http: HttpClient) {
  return new TranslateHttpLoader();
}

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        SharedModule,
        PagesModule,
        ComponentsModule,
        NgxPayPalModule,
        NgbModule,
        NgxSpinnerModule,
        AuthModule,
        SharethisAngularModule,
        NgxPaginationModule,
        AngularFileUploaderModule,
        ScrollingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: cargarTraductor,
                deps: [HttpClient]
            }
        })], providers: [
        {
            provide: TRANSLATE_HTTP_LOADER_CONFIG,
            useValue: {
                prefix: '../../assets/i18n/',
                suffix: '.json'
            }
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }
