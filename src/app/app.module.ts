import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavModule } from './nav/nav.module';
import { HttpClientModule} from '@angular/common/http';
import { MatMaterial } from './materials/mat.materials';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
