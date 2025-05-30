import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LateralComponent } from './lateral/lateral.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    LateralComponent,
    BlogListComponent,
    LoadingComponent
  ],
  exports: [
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    LateralComponent,
    BlogListComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class SharedModule { }
