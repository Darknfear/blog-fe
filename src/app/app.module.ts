import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './shared/layout/header/header.component';
import { HeaderModule } from './shared/layout/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
