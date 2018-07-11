import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { CartListComponent } from './cart-list.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    CartComponent,
    CartListComponent
  ],
  exports: [
    CartComponent,
    CartListComponent
  ]
})
export class CartModule { }
