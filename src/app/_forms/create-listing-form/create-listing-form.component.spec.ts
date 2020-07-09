import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListingFormComponent } from './create-listing-form.component';

describe('CreateListingFormComponent', () => {
  let component: CreateListingFormComponent;
  let fixture: ComponentFixture<CreateListingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateListingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
