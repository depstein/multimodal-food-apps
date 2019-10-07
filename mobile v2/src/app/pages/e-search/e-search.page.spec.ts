import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESearchPage } from './e-search.page';

describe('ESearchPage', () => {
  let component: ESearchPage;
  let fixture: ComponentFixture<ESearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
