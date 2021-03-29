import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPreviewComponent } from './listing-preview.component';

describe('ListingPreviewComponent', () => {
  let component: ListingPreviewComponent;
  let fixture: ComponentFixture<ListingPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
