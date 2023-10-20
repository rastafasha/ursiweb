import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalProductoComponent } from './modal-producto/modal-producto.component';

import { NgxPayPalModule } from 'ngx-paypal';
import { ModalPagoComponent } from './modal-pago/modal-pago.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PipesModule } from '../pipes/pipes.module';
import { BlogFeaturedComponent } from './blog-featured/blog-featured.component';
import { RouterModule } from '@angular/router';
import { DestacadosComponent } from './destacados/destacados.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { VirtualComponent } from './virtual/virtual.component';

import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalProductoComponent,
    ModalPagoComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    BlogFeaturedComponent,
    DestacadosComponent,
    VirtualComponent
  ],
  exports: [
    ModalProductoComponent,
    ModalPagoComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    BlogFeaturedComponent,
    DestacadosComponent,
    VirtualComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    NgxPayPalModule,
    PipesModule,
    RouterModule,
    ShareButtonsModule,
    ShareIconsModule,
    ScrollingModule
  ]
})
export class ComponentsModule { }
