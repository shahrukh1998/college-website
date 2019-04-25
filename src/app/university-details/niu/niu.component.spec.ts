import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiuComponent } from './niu.component';

describe('NiuComponent', () => {
  let component: NiuComponent;
  let fixture: ComponentFixture<NiuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
