import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRadiobuttonsComponent } from './question-radiobuttons.component';

describe('QuestionRadiobuttonsComponent', () => {
  let component: QuestionRadiobuttonsComponent;
  let fixture: ComponentFixture<QuestionRadiobuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionRadiobuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionRadiobuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
