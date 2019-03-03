import { Component, OnInit } from '@angular/core';
import { InterviewportalService } from 'src/app/interviewportal.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule-candidate',
  templateUrl: './schedule-candidate.component.html',
  styleUrls: ['./schedule-candidate.component.css']
})
export class ScheduleCandidateComponent implements OnInit {
  jobDatas:any;
  jobAndCandidateDatas:any;
  addInterviewerDatas:any;
  InterviewerByRole=[];
  uniqueRole=[]
  candidateDatas:any;
  value:boolean=false;
  arr=[];
  discardInterviewer=[]
candidateEmail='';
jobPostingTitle='';
value2:boolean=false;
singleJobAndCand:any;
previousResponse:any;
valPrevRes:boolean=false;
recentResponse:any;
valRecRes:boolean=false;
assigntableshow:boolean=false;
roleClicked:boolean=false
notroleClicked:boolean=false
notvalue:boolean=false
assigndata:any;
  
  constructor(private _interviewportalservice: InterviewportalService,private router: Router,private fb:FormBuilder) {
  }
  // rForm=this.fb.group({
  //   posting_title:['']
  //  });

   rForm = this.fb.group({
   // 'candidate_email': [null, Validators.required],
   'interviewer_role':[null],
    'interviewer_email': [null, Validators.required],
    'date': [null, Validators.required],
    'time': [null, Validators.required],
    'data':[null],
    'posting_title':[null]
  })
  async ngOnInit() {
    // GET DETAILS(Posting Title will ne shown on dropdown) OF ALL JOBS
    this.jobDatas=await this._interviewportalservice.getAddJobDataPromise();
    // 

this.jobAndCandidateDatas=await this._interviewportalservice.getJobAndCandidatePromise();
this.addInterviewerDatas=await this._interviewportalservice.getAddInterviewerDataPromise();
this.candidateDatas=await this._interviewportalservice.getCandidateDataPromise();
this.getUniqueRole()


}
// GET UNIQUE ROLE HERE
getUniqueRole()
{
  
 for(var i=0;i<this.addInterviewerDatas.length;i++)
{
  var role=this.addInterviewerDatas[i].role;
  var value=this.uniqueRole.find(c => c==role)
  
  if(!value)
  {
    this.uniqueRole.push(role);
  }
}
}
// 
// GET ALL CANDIDATES ON PARTICULAR JOB
getcandidate(event)
{

 this.arr=new Array();
  console.log(event.target.value);
  this.jobPostingTitle=event.target.value;
  for(var j=0;j<this.jobAndCandidateDatas.length;j++)
  {
    if(this.jobAndCandidateDatas[j].jobPostingTitle == (event.target.value))
    {
      console.log('candidate status is',this.jobAndCandidateDatas[j].candidateStatus);
      console.log('>>>');
      if(this.jobAndCandidateDatas[j].candidateStatus=="pending")
      {
        console.log('candidate status is pending');
        this.arr.push(this.jobAndCandidateDatas[j].candidateEmail);
      }
      
    }
  }
  console.log('arr',this.arr);
  if(this.arr.length>0)
  {
    this.value=true;
    this.notvalue=false
  }
  
  else
  {
    this.notvalue=true;
    this.value=false
  }
  
}
//
// DETAILS OF PARTICULAR CANDIDATE  FOR PARTICULAR JOB
showCandidateDetails(event)
{
  this.candidateEmail=event.target.value;
  console.log('candidateEmail',this.candidateEmail);
  for(var j=0;j<this.jobAndCandidateDatas.length;j++)
  {
    if((this.jobAndCandidateDatas[j].jobPostingTitle == (this.jobPostingTitle)) &&(this.jobAndCandidateDatas[j].candidateEmail==this.candidateEmail))
    {
      console.log('found candidate details for this job',this.jobAndCandidateDatas[j]);
      this.value2=true;
      this.singleJobAndCand=this.jobAndCandidateDatas[j];
      if((this.singleJobAndCand.previousResponse.length)>0)
      {
        console.log('length of previous response table is :',this.singleJobAndCand.previousResponse.length)
        this.previousResponse=this.singleJobAndCand.previousResponse;
        this.valPrevRes=true;
        for(var i=0;i<this.previousResponse.length;i++)
      {
        this.discardInterviewer.push(this.previousResponse[i].interviewerEmail)
      }
      }
      
      else
      {
        console.log('length of response table is 0');
        
      }
      if((this.singleJobAndCand.recentResponse.length)>0)
      {
        
        this.recentResponse=this.singleJobAndCand.recentResponse;
        this.valRecRes=true;
        for(var i=0;i<this.recentResponse.length;i++)
        {
          this.discardInterviewer.push(this.recentResponse[i].interviewerEmail)
        }
        console.log('discarded length is:',this.discardInterviewer.length)
        console.log('discared interviewer are:',this.discardInterviewer);
      }

      
      else
      {
        console.log('nnnnn',this.singleJobAndCand.recentResponse);
      }
    }
  }


}
//
assign(data)
{
  console.log('c_email is:',data.candidateEmail);
  this.assigntableshow=true;
  this.assigndata=data;

}
select(data){
  var obj2={status:'',jobId:'',candidateId:''}
      obj2.status='selected';
      obj2.jobId=data.jobId;
      obj2.candidateId=data.candidateId;
      this._interviewportalservice.updateStatusJobAndCandidate(obj2).subscribe((res)=>{
        console.log("res is:"+res);
      });

}

reject(data)
{
  var obj2={status:'',jobId:'',candidateId:''}
      obj2.status='rejected';
      obj2.jobId=data.jobId;
      obj2.candidateId=data.candidateId;
      this._interviewportalservice.updateStatusJobAndCandidate(obj2).subscribe((res)=>{
        console.log("res is:"+res);
      });

}
// AVAILABLE INTERVIEWER ON PARTICULAR ROLE
getInterviewerByRole(event)
{
  this.InterviewerByRole=new Array()
  var arrhere=[]
  for(var i=0;i<this.addInterviewerDatas.length;i++)
  {
    console.log('get role in dropdown is:',event.target.value)
    console.log('role in table is:',this.addInterviewerDatas[i].role)
    if(this.addInterviewerDatas[i].role==(event.target.value))
    {
      arrhere.push(this.addInterviewerDatas[i].email)
      var value=this.discardInterviewer.find(c=>c==this.addInterviewerDatas[i].email)
      if(!value)
      {
        this.InterviewerByRole.push(this.addInterviewerDatas[i]); 
      }
      
    }
  }
  console.log('total interviewer on this role is>>>:',arrhere)
  console.log('total available interviewer are:',this.InterviewerByRole)
if(this.InterviewerByRole.length>0)
{
  this.roleClicked=true;
  this.notroleClicked=false;
}
else
{
  this.notroleClicked=true;
  this.roleClicked=false;
}

  
}
//
addPost(post)
{
  var resume;
  var video;
  for(var i=0;i<this.candidateDatas.length;i++)
  {
    if(this.candidateDatas[i].PersonalInfo.email== this.assigndata.candidateEmail)
    {
      console.log('resume is:',resume);
      console.log('video is:',video);
      resume=this.candidateDatas[i].PersonalInfo.resume;
      video=this.candidateDatas[i].PersonalInfo.video;
      break;

    }
  }
  var obj={candidate_email:'',candidate_id:'',interviewer_email:'',
           date:'',time:'',jobPostingTitle:'',jobId:'',resume:'',video:'',active:null}
      obj.candidate_email=this.assigndata.candidateEmail;
      obj.candidate_id=this.assigndata.candidateId;
      obj.jobPostingTitle=this.assigndata.jobPostingTitle;
      obj.jobId=this.assigndata.jobId;
      obj.interviewer_email=post.interviewer_email;
      obj.date=post.date;
      obj.time=post.time;
      obj.resume=resume;
      obj.video=video;
      obj.active=1;
      this._interviewportalservice.setAssignInterviewerData(obj).subscribe((res)=>{
        console.log("res is:"+res);
       
      
        
      });
      var obj2={status:'',jobId:'',candidateId:''}
      obj2.status='assigned';
      obj2.jobId=this.assigndata.jobId;
      obj2.candidateId=this.assigndata.candidateId;
      this._interviewportalservice.updateStatusJobAndCandidate(obj2).subscribe((res)=>{
        console.log("res is:"+res);
      });
      
    
  

}

}
