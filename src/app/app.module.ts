import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './elements/header/header.component';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatToolbarModule } from '@angular/material';
import { HomeCtaComponent } from './elements/home-cta/home-cta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCtaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
