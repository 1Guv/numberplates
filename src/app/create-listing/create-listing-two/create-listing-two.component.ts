import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CreateListing, FormSetup, FormCards, FormSetupDate } from 'src/app/_models/content';
import { ContentService } from 'src/app/_services/content.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { map } from 'rxjs/operators';
import carManufacturersData from '../../../assets/data/car_manufacturers.json';

@Component({
  selector: 'app-create-listing-two',
  templateUrl: './create-listing-two.component.html',
  styleUrls: ['./create-listing-two.component.scss']
})
export class CreateListingTwoComponent implements OnInit {

  plateForm = new FormGroup({});
  createListing$: Observable<CreateListing>;
  heading$: Observable<string>;
  numberPlate$: Observable<string>;
  placeholderPlate$: Observable<string>;

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
  carFinance$: Observable<FormSetup>;
  carSatisfaction$: Observable<FormSetup>;
  carManufacturers$: Observable<FormSetup>;
  carModels$: Observable<FormSetup>;
  carNext$: Observable<FormSetup>;
  carNextModel$: Observable<FormSetup>;
  carMoneyNoObject$: Observable<FormSetup>;

  carInsurance$: Observable<FormSetup>;
  carInsuranceRenewalDate$: Observable<FormSetupDate>;
  carInsuranceMonthlyOrYearly$: Observable<FormSetup>;
  carInsuranceExcess$: Observable<FormSetup>;
  carInsuranceProviders$: Observable<FormSetup>;
  carInsuranceProvider = '';

  houseInsuranceRenewalDate$: Observable<FormSetupDate>;
  houseInsuranceMonthlyOrYearly$: Observable<FormSetup>;
  houseInsuranceProviders$: Observable<FormSetup>;

  mobile$: Observable<FormSetup>;
  mobileContractRenewalDate$: Observable<FormSetupDate>;
  mobileInsurance$: Observable<FormSetup>;
  mobileNumberDuration$: Observable<FormSetup>;
  mobileManufacturer$: Observable<FormSetup>;


  electricCar$: Observable<FormSetup>;
  electricCarNextVehicle$: Observable<FormSetup>;
  electricCarFavourite$: Observable<FormSetup>;
  electricCarTestDrive$: Observable<FormSetup>;
  electricCarWhyNot$: Observable<FormSetup>;


  constructor(private contentService: ContentService ) { }

  ngOnInit() {
    this.createListing$ = this.contentService.content$.pipe(map(content => content.createListing));
    this.initContent();

    this.plateForm.addControl('plateGroupName', new FormGroup({
      plate: new FormControl('', [Validators.required]),
      free: new FormControl(true, [Validators.required]),
      premium: new FormControl(false, [Validators.required]),
    }));

    // this.freeOr12Group.addControl('freeOr12', new FormGroup({
    //   free: new FormControl(true, [Validators.required]),
    //   12: new FormControl(false, [Validators.required]),
    // }));

    this.plateForm.get('plateGroupName').get('plate').valueChanges.subscribe(
      value => {
        this.numberPlate$ = of(value);
      }
    );

    // this.contentService.getPlates()
    //   .subscribe(plates => {
    //     console.log('plates', plates);
    //   });
  }

  initContent() {
    this.heading$ = this.contentService.content$.pipe(map(content => content.createListing.heading));
    this.numberPlate$ = this.placeholderPlate$;

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
    this.carManufacturers$ = this.contentService.content$.pipe(map(content => content.createListing.carManufacturers));
    this.contentService.addManufacturers(carManufacturersData, 'carManufacturers');
    this.carModels$ = this.contentService.content$.pipe(map(content => content.createListing.carModels));
    this.carFinance$ = this.contentService.content$.pipe(map(content => content.createListing.carFinance));
    this.carSatisfaction$ = this.contentService.content$.pipe(map(content => content.createListing.carSatisfaction));
    this.carNext$ = this.contentService.content$.pipe(map(content => content.createListing.carNext));
    this.contentService.addManufacturers(carManufacturersData, 'carNext');
    this.carNextModel$ = this.contentService.content$.pipe(map(content => content.createListing.carNextModel));
    this.carMoneyNoObject$ = this.contentService.content$.pipe(map(content => content.createListing.carMoneyNoObject));


    this.carInsurance$ = this.contentService.content$.pipe(map(content => content.createListing.carInsurance));
    this.carInsuranceRenewalDate$ = this.contentService.content$.pipe(map(content => content.createListing.carInsuranceRenewalDate));
    // tslint:disable-next-line: max-line-length
    this.carInsuranceMonthlyOrYearly$ = this.contentService.content$.pipe(map(content => content.createListing.carInsuranceMonthlyOrYearly));
    this.carInsuranceExcess$ = this.contentService.content$.pipe(map(content => content.createListing.carInsuranceExcess));
    this.carInsuranceProviders$ = this.contentService.content$.pipe(map(content => content.createListing.carInsuranceProviders));


    this.houseInsuranceRenewalDate$ = this.contentService.content$.pipe(map(content => content.createListing.houseInsuranceRenewalDate));
    // tslint:disable-next-line: max-line-length
    this.houseInsuranceMonthlyOrYearly$ = this.contentService.content$.pipe(map(content => content.createListing.houseInsuranceMonthlyOrYearly));
    this.houseInsuranceProviders$ = this.contentService.content$.pipe(map(content => content.createListing.houseInsuranceProviders));
    // this.houseInsurance$ = this.contentService.content$.pipe(map(content => content.createListing.houseInsurance));

    this.mobileContractRenewalDate$ = this.contentService.content$.pipe(map(content => content.createListing.mobileContractRenewalDate));
    this.mobileInsurance$ = this.contentService.content$.pipe(map(content => content.createListing.mobileInsurance));
    this.mobileNumberDuration$ = this.contentService.content$.pipe(map(content => content.createListing.mobileNumberDuration));
    this.mobileManufacturer$ = this.contentService.content$.pipe(map(content => content.createListing.mobileManufacturer));

    this.electricCar$ = this.contentService.content$.pipe(map(content => content.createListing.electricCar));
    this.electricCarNextVehicle$ = this.contentService.content$.pipe(map(content => content.createListing.electricCarNextVehicle));
    this.electricCarFavourite$ = this.contentService.content$.pipe(map(content => content.createListing.electricCarFavourite));
    this.electricCarTestDrive$ = this.contentService.content$.pipe(map(content => content.createListing.electricCarTestDrive));
    this.electricCarWhyNot$ = this.contentService.content$.pipe(map(content => content.createListing.electricCarWhyNot));
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

}
