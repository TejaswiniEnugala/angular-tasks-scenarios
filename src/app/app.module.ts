import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Component4Component } from './scenario4/component4/component4.component';
import { Component5Component } from './scenario4/component5/component5.component';
@NgModule({
  declarations: [
    AppComponent,
    Component4Component,
    Component5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
