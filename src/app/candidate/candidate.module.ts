import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule}from '@angular/forms';
import { UploadResumeNewComponent } from './upload-resume-new/upload-resume-new.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [UploadResumeNewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CandidateModule { }
