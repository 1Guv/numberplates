import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormCards, FormSetup } from 'src/app/_models/content';
import { ContentService } from 'src/app/_services/content.service';

@Component({
  selector: 'app-create-listing-new',
  templateUrl: './create-listing-new.component.html',
  styleUrls: ['./create-listing-new.component.scss']
})
export class CreateListingNewComponent implements OnInit {

  heading$: Observable<string>;
  newPlateForm: FormGroup;
  arr: FormArray;
  todaysDate: string;
  negotiableOrMakeAnOffer: boolean;

  plateTypes = [
    { name: 'Suffix' },
    { name: 'Prefix' },
    { name: 'Current' },
    { name: 'Dateless' }
  ];

  plateCategories = [
    { name: 'Sikh' },
    { name: 'Muslim' },
    { name: 'Hindu' },
    { name: 'Chinese' },
    { name: 'Japanese' },
    { name: 'English' },
    { name: 'Naughty' },
    { name: 'Singh' },
    { name: 'Allah' },
    { name: '786' },
    { name: 'Number 1' },
    { name: 'Dateless' },
    { name: 'Mohammed' },
    { name: 'Special' },
    { name: 'Rare' },
    { name: 'Modifications needed' },
  ];

  constructor(
    private contentService: ContentService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.todaysDate = this.getTodaysDate();
    this.createNewPlateListingForm();
    this.getHeaderInfo();
  }

  getTodaysDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const toDay = mm + '/' + dd + '/' + yyyy;
    return toDay;
  }

  getHeaderInfo() {
    this.heading$ = this.contentService.content$.pipe(map(content => content.createListing.heading));
  }

  createNewPlateListingForm() {
    this.newPlateForm = this.fb.group({
      arr: this.fb.array([this.createNewPlateListing()])
    });
  }

  createNewPlateListing() {
    return this.fb.group({
      lCName: ['Joe Blogs', [Validators.required]],
      lCNumber: ['07540100200', [Validators.required]],
      lCEmail: ['joe.blogs@gmail.com', [Validators.required, Validators.email]],
      initials: ['JB', [Validators.required, Validators.maxLength(2)]],
      profiletPicUrl: [''],
      profiletPicInitials: [true],
      currentDate: [this.todaysDate],
      plateCharacters: ['SE11 NOW', [Validators.required]],
      askingPrice: ['1000', [Validators.required]],
      plateNegotiable: [true],
      plateBestOffer: [false],
      offersOver: [false],
      orNearestOffer: [false],
      meanings: ['What does it mean', [Validators.required]],
      viewsPlaceholder: [''],
      messageSeller: [''],
      plateListingAccName: [''],
      plateListingAccTelNumber: [''],
      plateType: ['', [Validators.required]],
      plateCategory: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  addNewPlateListing() {
    this.arr = this.newPlateForm.get('arr') as FormArray;
    this.arr.push(this.createNewPlateListing());
  }

  removelateListing(index: number) {
    this.arr = this.newPlateForm.get('arr') as FormArray;
    this.arr.removeAt(index);
  }

  togglePriceWording(index: number, wording: string) {
    const plate = (this.newPlateForm.get('arr') as FormArray).at(index);

    switch (wording) {
      case 'negotiable':
        plate.patchValue({ plateBestOffer: false});
        plate.patchValue({ offersOver: false});
        plate.patchValue({ orNearestOffer: false});
        break;
      case 'bestOffer':
        plate.patchValue({ plateNegotiable: false});
        plate.patchValue({ offersOver: false});
        plate.patchValue({ orNearestOffer: false});
        break;
      case 'offersOver':
        plate.patchValue({ plateNegotiable: false});
        plate.patchValue({ plateBestOffer: false});
        plate.patchValue({ orNearestOffer: false});
        break;
      case 'ono':
        plate.patchValue({ plateNegotiable: false});
        plate.patchValue({ plateBestOffer: false});
        plate.patchValue({ offersOver: false});
        break;
    }
  }

}
