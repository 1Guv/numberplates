import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateViewSimpleComponent } from './plate-view-simple.component';

describe('PlateViewSimpleComponent', () => {
  let component: PlateViewSimpleComponent;
  let fixture: ComponentFixture<PlateViewSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateViewSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateViewSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
