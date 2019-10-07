import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EVoicePage } from './e-voice.page';

describe('EVoicePage', () => {
  let component: EVoicePage;
  let fixture: ComponentFixture<EVoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EVoicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EVoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
