import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeGltfsheenComponent } from './three-gltfsheen.component';

describe('ThreeGltfsheenComponent', () => {
  let component: ThreeGltfsheenComponent;
  let fixture: ComponentFixture<ThreeGltfsheenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeGltfsheenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeGltfsheenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
