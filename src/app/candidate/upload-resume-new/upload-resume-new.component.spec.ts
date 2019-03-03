import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadResumeNewComponent } from './upload-resume-new.component';

describe('UploadResumeNewComponent', () => {
  let component: UploadResumeNewComponent;
  let fixture: ComponentFixture<UploadResumeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadResumeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadResumeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
