import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCartDialogComponent } from './core/add-cart-dialog/add-cart-dialog.component';
import { MainComponent } from './core/main/main.component';


const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }