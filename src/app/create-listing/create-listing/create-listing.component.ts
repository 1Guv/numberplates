import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material';
import { ContentService } from 'src/app/_services/content.service';
import { CreateListing, StepperLabels, FormCards, FormSetup } from 'src/app/_models/content';
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

  placeholderPlate$: Observable<string>;
  numberPlate$: Observable<string>;
  plateFree$: Observable<boolean>;
  platePremuim: boolean = false;
  stepperLabels: Array<StepperLabels>;
  formCards: Array<FormCards>;
  meanings: FormSetup;
  ethnicities: FormSetup;

  constructor(private contentService: ContentService ) { }

  ngOnInit() {

    this.createListing$ = this.contentService.content$.pipe(map(content => content.createListing));
    this.initContent();

    // this.contentService.getContent()
    //   .subscribe(data => {
    //     this.createListing = data.createListing;
    //     console.log("CreateListingComponent -> ngOnInit -> this.createListing", this.createListing);
    //     this.initContent(this.createListing);
    //   })
      
    this.plateForm.addControl('plateGroupName', new FormGroup({
      plate: new FormControl('', [Validators.required]),
      free: new FormControl(true, [Validators.required]),
      premium: new FormControl(false, [Validators.required]),
    }));

    this.plateForm.get('plateGroupName').get('plate').valueChanges.subscribe(  
      value => {
        this.numberPlate$ = of(value);
      }  
    );
  }

  onChangeFree(event: MatSlideToggleChange) {
    if (event.checked) {
      this.plateForm.get('plateGroupName').get('premium').setValue(false)
    }

    if (!event.checked) {
      this.plateForm.get('plateGroupName').get('premium').setValue(true)
    }
  }

  onChangePremium(event: MatSlideToggleChange) {
    if (event.checked) {
      this.plateForm.get('plateGroupName').get('free').setValue(false)
    }

    if (!event.checked) {
      this.plateForm.get('plateGroupName').get('free').setValue(true)
    }
  }

  initContent() {
    this.heading$ = this.contentService.content$.pipe(map(content => content.createListing.heading));
    this.placeholderPlate$ = this.contentService.content$.pipe(map(content => content.createListing.placeholderPlate));
    this.numberPlate$ = this.placeholderPlate$;
    this.plateFree$ = this.contentService.content$.pipe(map(content => content.createListing.plateFree));
    // this.platePremuim = createListing.platePremuim;
    // this.stepperLabels = createListing.stepperLabels;
    // this.formCards = createListing.formCards;
    // this.meanings = createListing.meanings;
    // this.ethnicities = createListing.ethnicities;
  }
  

}
