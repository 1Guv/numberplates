import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './elements/header/header.component';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { HomeCtaComponent } from './elements/home-cta/home-cta.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SectionContentComponent } from './elements/section-content/section-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCtaComponent,
    HomeComponent,
    SectionContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
