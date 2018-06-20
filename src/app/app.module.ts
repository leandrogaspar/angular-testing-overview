import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoralTestComponent } from './moral-test/moral-test.component';
import { MoralStatusService } from './moral-test/moral-status.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MoralTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [
    MoralStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
