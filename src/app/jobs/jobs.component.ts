import { Component, OnInit } from '@angular/core';
import { InterviewportalService } from 'src/app/interviewportal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobDatas:any;
  jobdata:any
  value=false;
  

  constructor(private _interviewportalservice: InterviewportalService,private router: Router) {
   }

 async ngOnInit() {
  this.jobDatas = await this._interviewportalservice.getAddJobDataPromise();
  console.log(this.jobDatas);
  }

  jobDetails(data)
  {
    this.value=true;
    this.jobdata=data;
    console.log('this job data:',data);
  }
  applyThisJob(data)
  {
    console.log('job data inside applythisjob method is:',data);
    this.router.navigate(['/upload-resume-new'],{state:data});

  }

}
