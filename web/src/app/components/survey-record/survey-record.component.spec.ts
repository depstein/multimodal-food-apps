import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyRecordComponent } from './survey-record.component';

describe('SurveyRecordComponent', () => {
  let component: SurveyRecordComponent;
  let fixture: ComponentFixture<SurveyRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
