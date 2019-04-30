import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicePage } from './voice.page';

describe('VoicePage', () => {
  let component: VoicePage;
  let fixture: ComponentFixture<VoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
