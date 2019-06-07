import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDatePage } from './historydate.page';

describe('HistoryDatePage', () => {
  let component: HistoryDatePage;
  let fixture: ComponentFixture<HistoryDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryDatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
