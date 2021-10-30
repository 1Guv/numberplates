import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatStepper } from '@angular/material';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { ContentService } from 'src/app/_services/content.service';
import { PercentageIncrease, QuestionValues } from '../../models/valuation';

export interface PlateTypes {
  label: string;
  value: string;
}

export interface SuffixPrefixYears {
  year: string;
  reg: string;
}

export interface CurrentYears extends SuffixPrefixYears {
  month: string;
}

@Component({
  selector: 'app-valuation-dialog',
  templateUrl: './valuation-dialog.component.html',
  styleUrls: ['./valuation-dialog.component.scss']
})
export class ValuationDialogComponent implements OnInit, OnDestroy {

  @ViewChild('stepper', {static: true}) stepper: MatStepper;

  isLinear = false;
  stepZeroForm: FormGroup;
  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;
  stepThreeForm: FormGroup;

  plateTypes: PlateTypes[];
  suffixYears: SuffixPrefixYears[];
  prefixYears: SuffixPrefixYears[];
  currentYears: CurrentYears[];
  plateAge: number;
  platePriceBeforeQuestions = 0;
  percentageIncrease = new PercentageIncrease;
  questionValues = new QuestionValues;
  priceBeforeQuestions: number;
  q1Value: number;
  q2Value: number;
  q3Value: number;
  q4Value: number;
  q5Value: number;
  q6Value: number;
  replaceCommas = /,/gi;
  subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.createForms();
    this.getPlateTypes();
    this.getSuffixYears();
    this.getPrefixYears();
    this.getCurrentYears();

    this.subscriptions.push(
      this.stepZeroForm.get('plateType').valueChanges
      .subscribe(() => {
        this.stepZeroForm.get('plateYear').setValue('');
      })
    );

    this.subscriptions.push(
      this.stepZeroForm.get('plateYear').valueChanges
        .pipe(
          filter(plateYear => !!plateYear)
        )
        .subscribe(plateYear => {
          if (plateYear.toString().length === 4) {
            this.plateAge = new Date().getFullYear() - plateYear;
          }
        })
    )

    this.subscriptions.push(
      this.stepZeroForm.valueChanges
        .pipe(
          filter(() => !!this.stepZeroForm.valid),
          take(1),
          map(() => this.setPlateValB4Q())
        )
        .subscribe()
    );

    this.subscriptions.push(
      combineLatest(this.stepZeroForm.get('platePrice').valueChanges, this.stepZeroForm.get('plateYear').valueChanges)
        .pipe(
          filter(platePriceAndPlateYear => !!platePriceAndPlateYear),
          map(() => this.setPlateValB4Q())
        )
        .subscribe()
    );

    this.subscriptions.push(
      this.stepZeroForm.get('plateValB4Q').valueChanges
        .pipe(
          filter(plateValB4Q => !!plateValB4Q && plateValB4Q !== 0))
        .subscribe(plateValB4Q => {
          const plateValB4QNumber = parseInt(plateValB4Q.replace(this.replaceCommas, ''));
          this.q1Value = plateValB4QNumber * this.questionValues.q1;
          this.q2Value = plateValB4QNumber * this.questionValues.q2;
          this.q3Value = plateValB4QNumber * this.questionValues.q3;
          this.q4Value = plateValB4QNumber * this.questionValues.q4;
          this.q5Value = plateValB4QNumber * this.questionValues.q5;
          this.q6Value = plateValB4QNumber * this.questionValues.q6;
          console.log('this.q1Value', this.q1Value);
          console.log('this.q2Value', this.q2Value);
          console.log('this.q3Value', this.q3Value);
          console.log('this.q4Value', this.q4Value);

        })
    );

  }

  setPlateValB4Q() {
    this.stepZeroForm.get('plateValB4Q').setValue(this.calcPriceBeforeQuestions(this.stepZeroForm.get('platePrice').value));
    this.stepZeroForm.get('valuationPrice').setValue(this.calcPriceBeforeQuestions(this.stepZeroForm.get('platePrice').value));
    this.stepZeroForm.get('valuationPrice').setValue(parseInt(this.stepZeroForm.get('valuationPrice').value.replace(this.replaceCommas, '')));
  }

  createForms() {
    this.stepZeroForm = this.fb.group({
      plate: ['', [Validators.required, Validators.maxLength(8)]],
      platePrice: ['', Validators.required],
      plateType: ['', [Validators.required]],
      plateYear: ['',
        [
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(4),
          this.plateYearValidator
        ]
      ],
      plateValB4Q: [''],
      valuationPrice: ['']
    })

    this.stepOneForm = this.fb.group({
      meaning: ['', [Validators.required]]
    })

    this.stepTwoForm = this.fb.group({
      q1: ['', [Validators.required]],
      q2: ['', [Validators.required]],
      q3: ['', [Validators.required]],
      q4: ['', [Validators.required]]
    })

    this.stepThreeForm = this.fb.group({
      q5: ['', [Validators.required]],
      q6: ['', [Validators.required]]
    })
  }

  plateYearValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!!control.value && control.value.length > 0) {
      const firstTwoCharOfYear = [];

      for (var i=0; i<2; i++) {
        firstTwoCharOfYear.push(control.value.split('')[i]);
      }

      if (
        firstTwoCharOfYear.join().replace(',', '') === '19' ||
        firstTwoCharOfYear.join().replace(',', '') === '20' ||
        firstTwoCharOfYear.join().replace(',', '') === '21'
      ) {
        return null;
      } else {
        return { 'plateYear': false };
      }
    }
  }

  getPlateTypes() {
    this.plateTypes = [
      { label: 'Dateless', value: 'dateless'},
      { label: 'Suffix', value: 'suffix'},
      { label: 'Prefix', value: 'prefix'},
      { label: 'Current', value: 'current'},
      { label: 'Irish', value: 'irish'},
    ]
  }

  getSuffixYears() {
    this.contentService.suffixYears$.subscribe((suffixYears: Array<SuffixPrefixYears>) => {
      this.suffixYears = suffixYears
    })
  }

  getPrefixYears() {
    this.contentService.prefixYears$.subscribe((prefixYears: Array<SuffixPrefixYears>) => {
      this.prefixYears = prefixYears;
    })
  }

  getCurrentYears() {
    this.contentService.currentYears$.subscribe((currentYears: Array<CurrentYears>) => {
      this.currentYears = currentYears;
    })
  }

  onCloseValuationDialog() {
    this.dialog.closeAll();
  }

  calcPriceBeforeQuestions(priceBought: number) {
    const percentageIncrease = this.getPercentageIncrease();
    let price = this.calcPercentageInc(priceBought, percentageIncrease)
    this.priceBeforeQuestions = price;
    return this.numberWithCommas(Math.floor(price));
  }

  calcPercentageInc(priceBought, percentageIncrease) {
    for (let i=0; i<this.plateAge;  i++) {
      priceBought += (priceBought * percentageIncrease)
    }
    return priceBought;
  }

  numberWithCommas(price: number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  get valuationPrice() {
    return this.stepZeroForm.get('valuationPrice').value;
  }

  // First set of question reduces the valuation
  onQuestionChangePriceDec(event: any, plateValB4Q: string, questionValue: number) {
    if (event.checked) {
      this.stepZeroForm.get('valuationPrice').setValue(this.valuationPrice - questionValue);
    }

    if (!event.checked) {
      if (!!plateValB4Q && parseInt(plateValB4Q.replace(this.replaceCommas, '')) !== this.valuationPrice) {
        this.stepZeroForm.get('valuationPrice').setValue(this.valuationPrice + questionValue);
      }
    }
  }

   // Second set of question increases the valuation
   onQuestionChangePriceInc(event: any, valuationPrice: string, questionValue: number) {
    if (event.checked) {
      if (!!valuationPrice && valuationPrice !== this.stepZeroForm.get('plate').value) {
        this.stepZeroForm.get('valuationPrice').setValue(this.valuationPrice + questionValue);
      }
    }

    if (!event.checked) {
      this.stepZeroForm.get('valuationPrice').setValue(parseInt(valuationPrice) - questionValue);
    }
  }


  getPercentageIncrease() {
    switch (this.stepZeroForm.get('plateType').value) {
      case 'dateless':
        // If price greater than 7000 then reduce percentage inc to 12%
        if (parseInt(this.stepZeroForm.get('platePrice').value) > 7000) {
          console.log('Percentage Increase:' , (0.12 * 100) + '%')
          return 0.12;
        }

        // If age is greater than 15 years old then reduce percentage inc to 12%
        if (this.plateAge > 15) {
          console.log('Percentage Increase:' , (0.12 * 100) + '%')
          return 0.12;
        }

        console.log('Percentage Increase:' , (this.percentageIncrease.dateless * 100) + '%')
        return this.percentageIncrease.dateless;
        break;
      case 'suffix':
        if (this.plateAge > 30) {
          console.log('Percentage Increase:' , (0.15 * 100) + '%')
          return 0.15;
        }

        console.log('Percentage Increase:' , (this.percentageIncrease.suffix * 100) + '%')
        return this.percentageIncrease.suffix;
        break;
      case 'prefix':
         // If age is greater than 15 years old then reduce percentage inc to 12%
        if (this.plateAge > 15) {
          console.log('Percentage Increase:' , (0.10 * 100) + '%')
          return 0.10;
        }

        console.log('Percentage Increase:' , (this.percentageIncrease.prefix * 100) + '%')
        return this.percentageIncrease.prefix;
        break;
      case 'current':
        console.log('Percentage Increase:' , (this.percentageIncrease.current * 100) + '%')
        return this.percentageIncrease.current;
        break;
      case 'irish':
        console.log('Percentage Increase:' , (this.percentageIncrease.irish * 100) + '%')
        return this.percentageIncrease.irish;
        break;
    }
  }

  reset() {
    this.stepZeroForm.reset();
    this.stepOneForm.reset();
    this.stepTwoForm.reset();
    this.stepThreeForm.reset();
    this.stepper.selectedIndex = 0;
  }

  ngOnDestroy() {
    this.subscriptions.map(sub => sub.unsubscribe());
  }

}
