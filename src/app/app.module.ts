import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './_elements/header/header.component';
import {
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatToolbarModule,
  MatCardModule,
  MatBadgeModule,
  MatDialogModule,
  MatStepperModule } from '@angular/material';
import { HomeCtaComponent } from './_elements/home-cta/home-cta.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './_elements/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { CreateListingComponent } from './create-listing/create-listing/create-listing.component';
import { CreateListingTwoComponent } from './create-listing/create-listing-two/create-listing-two.component';
import { CreateListingNewComponent } from './create-listing/create-listing-new/create-listing-new.component';
import { NumberPlateSearchComponent } from './search/number-plate-search/number-plate-search.component';
import { ValuationDialogComponent } from './valuation/components/valuation-dialog/valuation-dialog.component';
import { ValuationModule } from './valuation/valuation.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCtaComponent,
    HomeComponent,
    FooterComponent
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
    SharedModule,
    MatDialogModule,
    ValuationModule
  ],
  providers: [CreateListingComponent, CreateListingTwoComponent, CreateListingNewComponent, NumberPlateSearchComponent],
  entryComponents: [ValuationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
