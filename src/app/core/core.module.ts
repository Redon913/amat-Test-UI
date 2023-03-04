import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MatMaterial } from '../materials/mat.materials';
import { CartComponent } from './cart/cart.component';
import { AddCartDialogComponent } from './add-cart-dialog/add-cart-dialog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    CartComponent,
    AddCartDialogComponent
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
