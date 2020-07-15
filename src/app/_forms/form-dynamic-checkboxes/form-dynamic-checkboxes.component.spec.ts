import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicCheckboxesComponent } from './form-dynamic-checkboxes.component';

describe('FormDynamicCheckboxesComponent', () => {
  let component: FormDynamicCheckboxesComponent;
  let fixture: ComponentFixture<FormDynamicCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDynamicCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDynamicCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
