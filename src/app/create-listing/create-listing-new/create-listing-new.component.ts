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
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
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
    })
  }

  createNewPlateListing() {
    return this.fb.group({
      plateAccountPicUrl: [''],
      currentDate: [this.todaysDate],
      plateCharacters: ['SE11 NOW'],
      askingPrice: ['1000'],
      meanings: ['What does it mean'],
      viewsPlaceholder: [''],
      messageSeller: [''],
      plateListingAccName: [''],
      plateListingAccTelNumber: [''],
    })
  }

  addNewPlateListing() {
    this.arr = this.newPlateForm.get('arr') as FormArray;
    this.arr.push(this.createNewPlateListing());
  }

}
