import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddInterviewerComponent } from './admin/add-interviewer/add-interviewer.component';
import { AssignInterviewerComponent } from './admin/assign-interviewer/assign-interviewer.component';
import { TrackStatusComponent } from './admin/track-status/track-status.component';

import { InterviewerhomeComponent } from './interviewer/interviewerhome/interviewerhome.component';
import { LoginAsCandidateComponent } from './login-as-candidate/login-as-candidate.component';

import { UploadResumeNewComponent } from './candidate/upload-resume-new/upload-resume-new.component';
import { HomeComponent } from './home/home.component';
import { AddJobComponent } from './admin/add-job/add-job.component';
import { JobsComponent } from './jobs/jobs.component';
import { ScheduleCandidateComponent } from './admin/schedule-candidate/schedule-candidate.component';



const routes: Routes = [
  {path:'admin-login',component:AdminLoginComponent,
  children:[
    {path:'add-interviewer',component:AddInterviewerComponent},
    {path:'assign-interviewer',component:AssignInterviewerComponent},
    {path:'track-status',component:TrackStatusComponent},
    {path:'add-job',component:AddJobComponent},
    {path:'schedule-candidate',component:ScheduleCandidateComponent}
  ]
},
{path:'jobs',component:JobsComponent},
{path:'', redirectTo:'home',pathMatch:'full'},
{path:'upload-resume-new',component:UploadResumeNewComponent},
{path:'interviewerhome',component:InterviewerhomeComponent},
{path:'login-as-candidate',component:LoginAsCandidateComponent},

//{path:'login-as-admin',component:LoginAsAdminComponent},
{path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
