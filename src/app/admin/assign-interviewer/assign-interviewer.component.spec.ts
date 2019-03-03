import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInterviewerComponent } from './assign-interviewer.component';

describe('AssignInterviewerComponent', () => {
  let component: AssignInterviewerComponent;
  let fixture: ComponentFixture<AssignInterviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignInterviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
