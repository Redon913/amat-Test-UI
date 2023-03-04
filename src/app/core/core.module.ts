import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MatMaterial } from '../materials/mat.materials';
import { CartComponent } from './cart/cart.component';
import { AddCartDialogComponent } from './add-cart-dialog/add-cart-dialog.component';
import { HandlerComponent } from './handler/handler.component';



@NgModule({
  declarations: [
    MainComponent,
    CartComponent,
    AddCartDialogComponent,
    HandlerComponent
  ],
  imports: [
    CommonModule,
    MatMaterial
  ],
  exports: [
    MainComponent,
    CartComponent
  ]
})
export class CoreModule { }
