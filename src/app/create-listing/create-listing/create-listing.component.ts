import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {

  plateForm = new FormGroup({});

  numberPlate: string;
  placeholderPlate: string = 'SE11 NOW'
  plateFree: boolean = true;
  platePremuim: boolean = false;

  constructor() { }

  ngOnInit() {
    this.plateForm.addControl('plateGroupName', new FormGroup({
      plate: new FormControl('', [Validators.required]),
      free: new FormControl(true, [Validators.required]),
      premium: new FormControl(false, [Validators.required]),
    }));

    this.plateForm.get('plateGroupName').get('plate').valueChanges.subscribe(  
      value => {
         this.numberPlate = value; 
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
  

}
