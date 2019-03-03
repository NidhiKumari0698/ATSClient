import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsCandidateComponent } from './login-as-candidate.component';

describe('LoginAsCandidateComponent', () => {
  let component: LoginAsCandidateComponent;
  let fixture: ComponentFixture<LoginAsCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAsCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAsCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
