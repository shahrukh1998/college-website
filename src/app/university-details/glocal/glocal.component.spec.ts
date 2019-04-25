import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlocalComponent } from './glocal.component';

describe('GlocalComponent', () => {
  let component: GlocalComponent;
  let fixture: ComponentFixture<GlocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
