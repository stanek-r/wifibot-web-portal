import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrowkeysComponent } from './components/arrowkeys/arrowkeys.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TouchpadComponent } from './components/touchpad/touchpad.component';
import * as PIXI from 'pixi.js';


@NgModule({
  declarations: [
    AppComponent,
    ArrowkeysComponent,
    TouchpadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
