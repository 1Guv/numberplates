import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListingTwoComponent } from './create-listing-two.component';

describe('CreateListingTwoComponent', () => {
  let component: CreateListingTwoComponent;
  let fixture: ComponentFixture<CreateListingTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateListingTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
