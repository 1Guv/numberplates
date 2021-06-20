import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPlateSearchComponent } from './number-plate-search.component';

describe('NumberPlateSearchComponent', () => {
  let component: NumberPlateSearchComponent;
  let fixture: ComponentFixture<NumberPlateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPlateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberPlateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
