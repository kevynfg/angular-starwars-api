import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwContainerModule } from './sw-container/sw-container.module';
import {} from '@angular/common/';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, SwContainerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
