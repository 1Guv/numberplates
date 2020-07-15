import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicInputsComponent } from './form-dynamic-inputs.component';

describe('FormDynamicInputsComponent', () => {
  let component: FormDynamicInputsComponent;
  let fixture: ComponentFixture<FormDynamicInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDynamicInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDynamicInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
