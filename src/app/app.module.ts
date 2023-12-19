
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './_elements/header/header.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
        ValuationModule,
        FontAwesomeModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        // AngularFontAwesomeModule
    ],
    providers: [
        CreateListingComponent,
        CreateListingTwoComponent,
        CreateListingNewComponent,
        NumberPlateSearchComponent,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
