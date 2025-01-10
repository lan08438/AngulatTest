import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DKWebHIDComponent } from './DKWeb-hid.component';

describe('DKWebHIDComponent', () => {
  let component: DKWebHIDComponent;
  let fixture: ComponentFixture<DKWebHIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DKWebHIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DKWebHIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
