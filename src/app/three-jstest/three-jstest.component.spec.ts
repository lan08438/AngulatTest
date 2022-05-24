import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeJSTestComponent } from './three-jstest.component';

describe('ThreeJSTestComponent', () => {
  let component: ThreeJSTestComponent;
  let fixture: ComponentFixture<ThreeJSTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeJSTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeJSTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
