import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InterviewportalService } from 'src/app/interviewportal.service';

@Component({
  selector: 'app-interviewerhome',
  templateUrl: './interviewerhome.component.html',
  styleUrls: ['./interviewerhome.component.css']
})
export class InterviewerhomeComponent implements OnInit {
  videopath: string = "";
  resumepath: string = "";
  activeVideo: boolean = false;
  activeResume: boolean = false;
  get_interviewer_data: any;
  get_loginId: string;
  get_interviewer_data_password: string;
  job_and_candidate:any;
  showtable: boolean = false;
  showdiv = false;
  data_for_given_email = [];
  
  add_interviewer_data: any;
  assign_interviewer_data: any;
  track_status_data: any;
  response:string;
  constructor(private fb: FormBuilder, private router: Router, private _interviewportalservice: InterviewportalService) {
    this.get_interviewer_data = this.router.getCurrentNavigation().extras.state;
    this.get_loginId = this.get_interviewer_data.get_loginId;
    //this.get_interviewer_data_password = this.get_interviewer_data.get_interviewer_password;
  }


async ngOnInit() {
 // this.upload_resume_data = await this._interviewportalservice.getCandidateDataPromise();
  this.add_interviewer_data = await this._interviewportalservice.getAddInterviewerDataPromise();
  this.assign_interviewer_data = await this._interviewportalservice.getAssignInterviewerDataPromise();
//  this.job_and_candidate=await this._interviewportalservice.getJobAndCandidatePromise();
  //this.track_status_data = await this._interviewportalservice.getTrackStatusDataPromise();

  this.furtherWork();
  }
  furtherWork()
  {
    console.log('>>>>>');
    var get_interviewer_data_email;
    for(var j=0;j<this.add_interviewer_data.length;j++)
    {
      console.log('.',this.add_interviewer_data[j]._id)
      console.log('..',this.get_loginId)
      if(this.add_interviewer_data[j]._id==this.get_loginId)
      {
         get_interviewer_data_email=this.add_interviewer_data[j].email
         console.log('email is:',get_interviewer_data_email)
         break;
      }
    }
     for(var i=0;i<this.assign_interviewer_data.length;i++)
     {
       if((this.assign_interviewer_data[i].interviewer_email == get_interviewer_data_email)&&(this.assign_interviewer_data[i].active==1))
       {
         this.data_for_given_email.push(this.assign_interviewer_data[i]);
         console.log('>>>>>',this.assign_interviewer_data[i])
         this.showtable = true;
       }
     }

  }

  

  showvideo(candidate_video) {
    console.log('candidate_video is:',candidate_video)
    this.videopath = candidate_video;
    console.log("path--:" + this.videopath);
    this.showdiv = true;
    this.activeVideo = true;
    this.activeResume = false;
  }
  showresume(candidate_resume) {
    console.log('candidate_resume is:',candidate_resume)
    this.resumepath = candidate_resume;
    console.log("pathresume--:" + this.resumepath);
    this.activeResume = true;
    this.showdiv = true;
    this.activeVideo = false;
  }
  selected(data) {
    
  
    var obj2={status:'',jobId:'',candidateId:''}
      obj2.status='pending';
      obj2.jobId=data.jobId;
      obj2.candidateId=data.candidate_id;

      var obj3={round:String,interviewerEmail:String,response:String,date:String,time:String,jobId:'',candidateId:''}
      obj3.round=data.round;
      obj3.interviewerEmail=data.interviewer_email;
      obj3.response=data.response;
      obj3.date=data.date;
      obj3.time=data.time;
      obj3.jobId=data.jobId;
      obj3.candidateId=data.candidate_id;

      var obj4={active:null,jobId:'',candidateId:''}
      obj4.active=0;
      obj4.jobId=data.jobId;
      obj4.candidateId=data.candidate_id;

    this._interviewportalservice.updateStatusJobAndCandidate(obj2).subscribe((res)=>{
      console.log(res);
      
    });
    this._interviewportalservice.updateRecentResponseJobAndCandidate(obj3).subscribe((res)=>{

    });

    this._interviewportalservice.updateActiveAssignInterviewerData(obj4).subscribe((res)=>{

    });

    var email=data.candidate_email;
    var jobPostingTitle=data.jobPostingTitle;
     this._interviewportalservice.getJobAndCandidate().subscribe((result)=>{
       this.job_and_candidate=result;
       let c= this.job_and_candidate.find(c => (c.candidateEmail==email) && (c.jobPostingTitle==jobPostingTitle))
    console.log('c',c);
    console.log('response is:',data.response);
    console.log('data is:',data);

     })
     

  };
  
}
