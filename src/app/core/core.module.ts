import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MatMaterial } from '../materials/mat.materials';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    MainComponent,
    CartComponent
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
