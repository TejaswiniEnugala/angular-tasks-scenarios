import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Component9Component } from './scenario6/component9/component9.component';
import { Component10Component } from './scenario6/component10/component10.component';
import { Component11Component } from './scenario6/component11/component11.component';

@NgModule({
  declarations: [
    AppComponent,
    Component10Component,
    Component11Component,
    Component9Component
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
