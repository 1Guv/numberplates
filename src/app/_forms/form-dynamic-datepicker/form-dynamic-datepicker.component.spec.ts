import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicDatepickerComponent } from './form-dynamic-datepicker.component';

describe('FormDynamicDatepickerComponent', () => {
  let component: FormDynamicDatepickerComponent;
  let fixture: ComponentFixture<FormDynamicDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDynamicDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDynamicDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
