import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInterviewerComponent } from './add-interviewer/add-interviewer.component';
import { AssignInterviewerComponent } from './assign-interviewer/assign-interviewer.component';
import { TrackStatusComponent } from './track-status/track-status.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddJobComponent } from './add-job/add-job.component';
import { ScheduleCandidateComponent } from './schedule-candidate/schedule-candidate.component';

@NgModule({
  declarations: [AddInterviewerComponent, AssignInterviewerComponent, TrackStatusComponent, AddJobComponent, ScheduleCandidateComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:
  [AddInterviewerComponent,
  AssignInterviewerComponent,
  TrackStatusComponent]
})
export class AdminModule { }
