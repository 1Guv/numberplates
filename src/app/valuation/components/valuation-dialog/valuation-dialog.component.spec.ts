import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationDialogComponent } from './valuation-dialog.component';

describe('ValuationDialogComponent', () => {
  let component: ValuationDialogComponent;
  let fixture: ComponentFixture<ValuationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
