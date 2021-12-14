import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrowkeysComponent } from './components/home/arrowkeys/arrowkeys.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TouchpadComponent } from './components/touchpad/touchpad.component';
import * as PIXI from 'pixi.js';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { OtherInformationComponent } from './components/home/other-information/other-information.component';
import { CameraComponent } from './components/home/camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrowkeysComponent,
    TouchpadComponent,
    HomeComponent,
    SettingsComponent,
    OtherInformationComponent,
    CameraComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
