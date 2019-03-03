import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCandidateComponent } from './schedule-candidate.component';

describe('ScheduleCandidateComponent', () => {
  let component: ScheduleCandidateComponent;
  let fixture: ComponentFixture<ScheduleCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
