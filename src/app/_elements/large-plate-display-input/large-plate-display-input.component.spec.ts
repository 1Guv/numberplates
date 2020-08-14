import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargePlateDisplayInputComponent } from './large-plate-display-input.component';

describe('LargePlateDisplayInputComponent', () => {
  let component: LargePlateDisplayInputComponent;
  let fixture: ComponentFixture<LargePlateDisplayInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargePlateDisplayInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargePlateDisplayInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
