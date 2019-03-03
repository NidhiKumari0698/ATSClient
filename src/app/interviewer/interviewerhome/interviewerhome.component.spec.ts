import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerhomeComponent } from './interviewerhome.component';

describe('InterviewerhomeComponent', () => {
  let component: InterviewerhomeComponent;
  let fixture: ComponentFixture<InterviewerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
