import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCheckboxesComponent } from './question-checkboxes.component';

describe('QuestionCheckboxesComponent', () => {
  let component: QuestionCheckboxesComponent;
  let fixture: ComponentFixture<QuestionCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
