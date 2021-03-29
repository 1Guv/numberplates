import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateCardComponent } from './plate-card.component';

describe('PlateCardComponent', () => {
  let component: PlateCardComponent;
  let fixture: ComponentFixture<PlateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
