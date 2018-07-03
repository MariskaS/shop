import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ProductComponent } from './product-list/product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { CartComponent } from './cart-list/cart/cart.component';
import { CartListComponent } from './cart-list/cart-list.component';

import { ProductsService } from './product-list/products.service';
import { CartService } from './cart-list/cart.service';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
