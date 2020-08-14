import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicSelectsComponent } from './form-dynamic-selects.component';

describe('FormDynamicSelectsComponent', () => {
  let component: FormDynamicSelectsComponent;
  let fixture: ComponentFixture<FormDynamicSelectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDynamicSelectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDynamicSelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
