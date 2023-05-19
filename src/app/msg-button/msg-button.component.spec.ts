import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgButtonComponent } from './msg-button.component';

describe('MsgButtonComponent', () => {
  let component: MsgButtonComponent;
  let fixture: ComponentFixture<MsgButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgButtonComponent]
    });
    fixture = TestBed.createComponent(MsgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
