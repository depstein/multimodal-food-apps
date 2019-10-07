import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EUrlPage } from './e-url.page';

describe('EUrlPage', () => {
  let component: EUrlPage;
  let fixture: ComponentFixture<EUrlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EUrlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EUrlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
