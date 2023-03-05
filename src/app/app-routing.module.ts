import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandlerComponent } from './core/handler/handler.component';
import { MainComponent } from './core/main/main.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'handler', component: HandlerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
