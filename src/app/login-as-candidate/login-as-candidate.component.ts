import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { InterviewportalService } from '../interviewportal.service';

@Component({
  selector: 'app-login-as-candidate',
  templateUrl: './login-as-candidate.component.html',
  styleUrls: ['./login-as-candidate.component.css']
})
export class LoginAsCandidateComponent implements OnInit {
  get_candidate_data: any;
  get_candidate_jobs:any;
  get_assign_interviewer_data:any;
  job_and_candidate_details:any;
  get_loginId: string;
  get_candidate_data_password: string;
  candidate_data: any;
  add_interviewer_data: any;
  assign_interviewer_data: any;
  track_status_data: any;
  arr=[];
  showTable:boolean=false;
  history:boolean=false;
  selectedCandidate:Boolean=false;
  rejectedCandidate:Boolean=false;
  pendingCandidate:boolean=false;
  assignedCandidate:boolean=false;
  constructor(private fb: FormBuilder, private router: Router, private _interviewportalservice: InterviewportalService) {
    // THE EMAIL OF CANDIDATE WHO HAS LOGGED IN
    this.get_candidate_data = this.router.getCurrentNavigation().extras.state;
    this.get_loginId = this.get_candidate_data.get_loginId;
    console.log("login with" + this.get_loginId);
  }
   ngOnInit() {
    //ALL THE JOBS THIS CANDIDATE HAS APPLIED
    this._interviewportalservice.getJobInCandidateData(this.get_loginId).subscribe(data=>{
      console.log('data is',data);
      this.get_candidate_jobs=data;
      console.log('>>>>>',this.get_candidate_jobs);
      })
    }
 
  getStatus(data){
    
    console.log("hieeee");
    var obj={
      'jobId':'',
      'loginId':''
    }
    var v=data.jobId
    obj.jobId=data.jobId;
    obj.loginId=this.get_loginId;
    console.log('jobId is:',obj.jobId);
    console.log('candidateEmail is:',obj.loginId);
    this._interviewportalservice.getDetailsInJobAndCandidate(obj).subscribe(data=>{
      console.log('data>>>>>>is',data);
      this.job_and_candidate_details=data;
      //var status=this.job_and_candidate_details.candidateStatus;
      this.processStatus(this.job_and_candidate_details,v);
      })

  }
  processStatus(data,jobId) {

    console.log('inside process status');
    var status=data.candidateStatus;
    console.log('status is:',status);
    
    
    if(status=='selected')
    {
      console.log('this candidate is selected ')
      this.selectedCandidate=true;
      this.rejectedCandidate=false;
      this.pendingCandidate=false;
      this.assignedCandidate=false;
      var arr=[];
      //arr1.push(data.previousResponse);
      //arr1.push(data.recentResponse);
      if(data.previousResponse.length>0)
      {
        for(var i=0;i<data.previousResponse.length;i++)
        {
          var obj={'round':null,'interviewerEmail':'','date':'','time':'','response':''}
          obj.round=data.previousResponse[i].round;
          obj.interviewerEmail=data.previousResponse[i].interviewerEmail;
          obj.date=data.previousResponse[i].date;
          obj.time=data.previousResponse[i].time;
          obj.response='cleared';
          arr.push(obj)

        }
      }
      if(data.recentResponse.length>0)
      {
        for(var i=0;i<data.recentResponse.length;i++)
        {
          var obj={'round':null,'interviewerEmail':'','date':'','time':'','response':''}
          obj.round=data.recentResponse[i].round;
          obj.interviewerEmail=data.recentResponse[i].interviewerEmail;
          obj.date=data.recentResponse[i].date;
          obj.time=data.recentResponse[i].time;
          obj.response='cleared';
          arr.push(obj)

        }
      }
      this.arr=arr;
    }

    else if(status=='rejected')
    {
      console.log('this candidate is rejected');
      this.rejectedCandidate=true;
      this.selectedCandidate=false;
      this.pendingCandidate=false;
      this.assignedCandidate=false;
      var arr=[];
      //arr1.push(data.previousResponse);
      //arr1.push(data.recentResponse);
      if(data.previousResponse.length>0)
      { 
        for(var i=0;i<data.previousResponse.length;i++)
        {
          var obj={'round':null,'interviewerEmail':'','date':'','time':'','response':''}
          obj.round=data.previousResponse[i].round;
          obj.interviewerEmail=data.previousResponse[i].interviewerEmail;
          obj.date=data.previousResponse[i].date;
          obj.time=data.previousResponse[i].time;
          obj.response='cleared';
          console.log(obj.response,",,,,,");
          arr.push(obj)

        }
      }
      if(data.recentResponse.length>0)
      {
        for(var i=0;i<data.recentResponse.length;i++)
        {
          var obj={'round':null,'interviewerEmail':'','date':'','time':'','response':''}
          obj.round=data.recentResponse[i].round;
          obj.interviewerEmail=data.recentResponse[i].interviewerEmail;
          obj.date=data.recentResponse[i].date;
          obj.time=data.recentResponse[i].time;
          obj.response='rejected';
          arr.push(obj)

        }
      }
      this.arr=arr;
    }

    else if(status=='pending')
    {
      console.log('this candidate is pending');
      this.pendingCandidate=true;
      this.selectedCandidate=false;
      this.rejectedCandidate=false;
      this.assignedCandidate=false;
      var arr=[];
      //arr1.push(data.previousResponse);
      //arr1.push(data.recentResponse);
      if(data.previousResponse.length>0)
      { 
        for(var i=0;i<data.previousResponse.length;i++)
        {
          var obj={'round':null,'interviewerEmail':'','date':'','time':'','response':''}
          obj.round=data.previousResponse[i].round;
          obj.interviewerEmail=data.previousResponse[i].interviewerEmail;
          obj.date=data.previousResponse[i].date;
          obj.time=data.previousResponse[i].time;
          obj.response='cleared';
          console.log(obj.response,",,,,,");
          arr.push(obj)

        }
      }
      if(data.recentResponse.length>0)
      {
        for(var i=0;i<data.recentResponse.length;i++)
        {
          var obj={'round':null,'interviewerEmail':'','date':'','time':'','response':''}
          obj.round=data.recentResponse[i].round;
          obj.interviewerEmail=data.recentResponse[i].interviewerEmail;
          obj.date=data.recentResponse[i].date;
          obj.time=data.recentResponse[i].time;
          obj.response='pending';
          arr.push(obj)

        }
      }
     this.arr=arr;
      
    }

    else if(status=='assigned')
    {
      console.log('this candidate is assigned');
      this.pendingCandidate=false;
      this.selectedCandidate=false;
      this.rejectedCandidate=false;
      this.assignedCandidate=true;
      var arr=[];
      //arr1.push(data.previousResponse);
      //arr1.push(data.recentResponse);
      var objnew={
        'jobId':'',
        'loginId':''
      }
      objnew.jobId=jobId;
      objnew.loginId=this.get_loginId;
      console.log('jobId is:',jobId);
      console.log('loginId is:',objnew.loginId);
      
      this._interviewportalservice.getDetailInAssignInterviewerData(objnew).subscribe(data=>{
        console.log('data>>>>>>is',data);
        this.get_assign_interviewer_data=data;
        var getdata=this.get_assign_interviewer_data
        var obj={'round':null,'interviewerEmail':'','date':'','time':'','response':''}
          obj.round=getdata.round;
          obj.interviewerEmail=getdata.interviewer_email;
          obj.date=getdata.date;
          obj.time=getdata.time;
          obj.response='interview scheduled';
          arr.push(obj);
          console.log('arr of assigned is',arr);
      
        
        })

      
        
       
        
        
    

      if(data.previousResponse.length>0)
      { 
        for(var i=0;i<data.previousResponse.length;i++)
        {
          var obj={'round':null,'interviewerEmail':'','date':'','time':'','response':''}
          obj.round=data.previousResponse[i].round;
          obj.interviewerEmail=data.previousResponse[i].interviewerEmail;
          obj.date=data.previousResponse[i].date;
          obj.time=data.previousResponse[i].time;
          obj.response='cleared';
          console.log(obj.response,",,,,,");
          arr.push(obj)

        }
      }
      if(data.recentResponse.length>0)
      {
        for(var i=0;i<data.recentResponse.length;i++)
        {
          var obj={'round':null,'interviewerEmail':'','date':'','time':'','response':''}
          obj.round=data.recentResponse[i].round;
          obj.interviewerEmail=data.recentResponse[i].interviewerEmail;
          obj.date=data.recentResponse[i].date;
          obj.time=data.recentResponse[i].time;
          obj.response='cleared';
          arr.push(obj)

        }
      }
     this.arr=arr;
      
    }
    console.log(this.arr.length ,'arr length:');
    if(this.arr.length<0)
    {
      
      this.history=true;
    }
    else{
      this.showTable=true;
    }
  
   
  }
}


