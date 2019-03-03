import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminModule } from './admin/admin.module';
import { CandidateModule } from './candidate/candidate.module';
import { InterviewerModule } from './interviewer/interviewer.module';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginAsCandidateComponent } from './login-as-candidate/login-as-candidate.component';
import { SafePipe } from './safe.pipe';
import { HomeComponent } from './home/home.component'
import { InterviewportalService } from './interviewportal.service';
import {HttpClientModule} from '@angular/common/http';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    LoginAsCandidateComponent,
    HomeComponent,
    JobsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CandidateModule,
    InterviewerModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [InterviewportalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
