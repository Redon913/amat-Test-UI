import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatMaterial } from '../materials/mat.materials';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatMaterial
  ],
  exports: [
    HeaderComponent
  ]
})
export class NavModule { }
