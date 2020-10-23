import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material';
import { ContentService } from 'src/app/_services/content.service';
import { CreateListing, StepperLabels, FormCards, FormSetup, Section, Carousel } from 'src/app/_models/content';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {

  createListing$: Observable<CreateListing>;
  heading$: Observable<string>;
  plateForm = new FormGroup({});
  freeOr12Group = new FormGroup({});
  // premiumGroup = new FormGroup({});

  placeholderPlate$: Observable<string>;
  numberPlate$: Observable<string>;
  plateFree$: Observable<boolean>;
  platePremuim$: Observable<boolean> = of(false);
  stepperLabels: Array<StepperLabels>;

  formCards$: Observable<FormCards[]>;
  meanings$: Observable<FormSetup>;
  ethnicities$: Observable<FormSetup>;
  costs$: Observable<FormSetup>;
  boughtFrom$: Observable<FormSetup>;
  plateType$: Observable<FormSetup>;

  formCardsTwo$: Observable<FormCards[]>;
  names$: Observable<FormSetup>;
  contactDetails$: Observable<FormSetup>;
  address$: Observable<FormSetup>;

  formCardsThree$: Observable<FormCards[]>;
  car$: Observable<FormSetup>;
  carInsurance$: Observable<FormSetup>;
  houseInsurance$: Observable<FormSetup>;
  mobile$: Observable<FormSetup>;
  electricCar$: Observable<FormSetup>;

  premium$: Observable<Section>;
  premiumCarouselSectionContent$: Observable<Section>;
  premiumFBScreenShotsCarousel$: Observable<Carousel>;

  showFormUnlessPay12: boolean = true;

  constructor(private contentService: ContentService ) { }

  ngOnInit() {

    this.createListing$ = this.contentService.content$.pipe(map(content => content.createListing));
    this.initContent();

    this.plateForm.addControl('plateGroupName', new FormGroup({
      plate: new FormControl('', [Validators.required]),
      free: new FormControl(true, [Validators.required]),
      premium: new FormControl(false, [Validators.required]),
    }));

    this.freeOr12Group.addControl('freeOr12', new FormGroup({
      free: new FormControl(true, [Validators.required]),
      12: new FormControl(false, [Validators.required]),
    }));

    this.plateForm.get('plateGroupName').get('plate').valueChanges.subscribe(
      value => {
        this.numberPlate$ = of(value);
      }
    );
  }

  onChangeFree(event: MatSlideToggleChange) {
    if (event.checked) {
      this.plateForm.get('plateGroupName').get('premium').setValue(false);
    }

    if (!event.checked) {
      this.plateForm.get('plateGroupName').get('premium').setValue(true);
    }
  }

  onChangePremium(event: MatSlideToggleChange) {
    if (event.checked) {
      this.plateForm.get('plateGroupName').get('free').setValue(false);
    }

    if (!event.checked) {
      this.plateForm.get('plateGroupName').get('free').setValue(true);
    }
  }

  onChangeFreeOr12(event: MatSlideToggleChange) {
    if (event.checked) {
      this.freeOr12Group.get('freeOr12').get('free').setValue(false);
      this.showFormUnlessPay12 = false;
      // need to remove form as well
    }

    if (!event.checked) {
      this.freeOr12Group.get('freeOr12').get('free').setValue(true);
      this.showFormUnlessPay12 = true;
    }
  }

  onChange12(event: MatSlideToggleChange) {
    if (event.checked) {
      this.freeOr12Group.get('freeOr12').get('12').setValue(false);
      this.showFormUnlessPay12 = true;
    }

    if (!event.checked) {
      this.freeOr12Group.get('freeOr12').get('12').setValue(true);
      this.showFormUnlessPay12 = false;
      // need to remove form as well
      // TODO: Remove or add form
    }
  }

  initContent() {
    this.heading$ = this.contentService.content$.pipe(map(content => content.createListing.heading));
    this.placeholderPlate$ = this.contentService.content$.pipe(map(content => content.createListing.placeholderPlate));
    this.numberPlate$ = this.placeholderPlate$;
    this.plateFree$ = this.contentService.content$.pipe(map(content => content.createListing.plateFree));
    this.platePremuim$ = this.contentService.content$.pipe(map(content => content.createListing.platePremuim));
    // this.stepperLabels = createListing.stepperLabels;
    this.formCards$ = this.contentService.content$.pipe(map(content => content.createListing.formCards));
    this.meanings$ = this.contentService.content$.pipe(map(content => content.createListing.meanings));
    this.ethnicities$ = this.contentService.content$.pipe(map(content => content.createListing.ethnicities));
    this.costs$ = this.contentService.content$.pipe(map(content => content.createListing.costs));
    this.boughtFrom$ = this.contentService.content$.pipe(map(content => content.createListing.boughtFrom));
    this.plateType$ = this.contentService.content$.pipe(map(content => content.createListing.plateType));

    this.formCardsTwo$ = this.contentService.content$.pipe(map(content => content.createListing.formCardsTwo));
    this.names$ = this.contentService.content$.pipe(map(content => content.createListing.names));
    this.contactDetails$ = this.contentService.content$.pipe(map(content => content.createListing.contactDetails));
    this.address$ = this.contentService.content$.pipe(map(content => content.createListing.address));

    this.formCardsThree$ = this.contentService.content$.pipe(map(content => content.createListing.formCardsThree));
    // this.car$ = this.contentService.content$.pipe(map(content => content.createListing.car));
    this.carInsurance$ = this.contentService.content$.pipe(map(content => content.createListing.carInsurance));
    this.houseInsurance$ = this.contentService.content$.pipe(map(content => content.createListing.houseInsurance));
    this.mobile$ = this.contentService.content$.pipe(map(content => content.createListing.mobile));
    this.electricCar$ = this.contentService.content$.pipe(map(content => content.createListing.electricCar));

    this.premium$ = this.contentService.content$.pipe(map(content => content.createListing.premium));
    this.premiumCarouselSectionContent$ = this.contentService.content$.pipe(map(content => content.createListing.premiumCarouselSectionContent));
    this.premiumFBScreenShotsCarousel$ = this.contentService.content$.pipe(map(content => content.createListing.premiumFBScreenShotsCarousel));

  }


}
