import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECameraPage } from './e-camera.page';

describe('ECameraPage', () => {
  let component: ECameraPage;
  let fixture: ComponentFixture<ECameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECameraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
