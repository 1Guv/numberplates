import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSellerDialogComponent } from './message-seller-dialog.component';

describe('MessageSellerDialogComponent', () => {
  let component: MessageSellerDialogComponent;
  let fixture: ComponentFixture<MessageSellerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSellerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSellerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
