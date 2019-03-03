import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerhomeComponent } from './interviewerhome/interviewerhome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SafePipe } from '../safe.pipe';

@NgModule({
  declarations: [InterviewerhomeComponent,SafePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InterviewerModule { }
