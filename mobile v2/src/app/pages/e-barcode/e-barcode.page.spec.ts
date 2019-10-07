import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EBarcodePage } from './e-barcode.page';

describe('EBarcodePage', () => {
  let component: EBarcodePage;
  let fixture: ComponentFixture<EBarcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBarcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EBarcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
