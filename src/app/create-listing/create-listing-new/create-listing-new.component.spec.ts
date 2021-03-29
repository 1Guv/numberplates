import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListingNewComponent } from './create-listing-new.component';

describe('CreateListingNewComponent', () => {
  let component: CreateListingNewComponent;
  let fixture: ComponentFixture<CreateListingNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateListingNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
