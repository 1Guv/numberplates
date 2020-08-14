import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCarouselComponent } from './bootstrap-carousel.component';

describe('BootstrapCarouselComponent', () => {
  let component: BootstrapCarouselComponent;
  let fixture: ComponentFixture<BootstrapCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
