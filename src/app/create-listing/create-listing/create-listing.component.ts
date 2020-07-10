import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {

  plateForm = new FormGroup({});

  numberPlate: string;
  placeholderPlate: string = 'SE11 NOW'
  value: string;

  constructor() { }

  ngOnInit() {
    this.plateForm.addControl('plateGroupName', new FormGroup({
      plate: new FormControl('', [Validators.required]),
    }));

    this.plateForm.get('plateGroupName').get('plate').valueChanges.subscribe(  
      value => {
         this.numberPlate = value; 
      }  
   );
  }
  

}
