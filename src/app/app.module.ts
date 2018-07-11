import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { ProductsService } from './product-list/products.service';
import { CartService } from './cart-list/cart.service';

import { CartModule } from './cart-list/cart.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './product-list/products.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    CartModule,
    ProductsModule
  ],
  providers: [
    ProductsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
