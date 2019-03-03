import { Component, OnInit } from '@angular/core';
import { InterviewportalService } from 'src/app/interviewportal.service';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-track-status',
  templateUrl: './track-status.component.html',
  styleUrls: ['./track-status.component.css']
})
export class TrackStatusComponent implements OnInit {
  get_candidate_data_email: string;
  get_candidate_data_password: string;
  table_with_result_yes: boolean = false;
  table_with_result_no: boolean = false;
  table_with_assigned: boolean = false;
  table_without_assigned: boolean = false;
  upload_resume_data: any;
  track_status_data: any;
  assign_interviewer_data: any;
  
  constructor(private _interviewportal: InterviewportalService, private http: HttpClient) { }
  async ngOnInit() {
    this.upload_resume_data = await this._interviewportal.getCandidateDataPromise();
    this.assign_interviewer_data = await this._interviewportal.getAssignInterviewerDataPromise();
    this.track_status_data = await this._interviewportal.getTrackStatusDataPromise();
    var upload_resume_data1 = this.upload_resume_data;
    for (var t = 0; t < upload_resume_data1.length; t++) {
      this.get_candidate_data_email = upload_resume_data1[t].email;
      this.get_candidate_data_password = upload_resume_data1[t].password;
      this.processFun();
    }
  }
  given_candidate_data_with_result_yes = [];
  given_candidate_data_with_result_no = [];
  given_candidate_data_with_assigned = [];
  given_candidate_data_without_assigned = [];
  processFun() {
    console.log("get email:" + this.get_candidate_data_email);
    console.log("get password:" + this.get_candidate_data_password);
    console.log("inside login");
    var user_register = 0;
    var upload_resume_data = this.upload_resume_data;
    for (var j = 0; j < upload_resume_data.length; j++) {
      if (this.get_candidate_data_email == upload_resume_data[j].email && this.get_candidate_data_password == upload_resume_data[j].password) {
        user_register = 1;
        break;
      }
    }
    if (user_register == 1) {
      console.log("user is registered");
      var candidate_result_declared = 0;
      var candidate_result_declared_index;
      var track_status_data = this.track_status_data;
      for (var k = 0; k < track_status_data.length; k++) {
        if (this.get_candidate_data_email == track_status_data[k].candidate_email) {
          console.log("candidate result is declared");
          candidate_result_declared = 1;
          candidate_result_declared_index = k;
          break;
        }
      }
      if (candidate_result_declared == 1) {
        console.log("candidate result is already declared");
        if (track_status_data[candidate_result_declared_index].selected == "yes") {
          var d_yes = { 'candidate_email': '', 'interviewer_email': '', 'date': '', 'time': '', 'selected': '' };
          d_yes.candidate_email = track_status_data[candidate_result_declared_index].candidate_email;
          d_yes.interviewer_email = track_status_data[candidate_result_declared_index].interviewer_email;
          d_yes.date = track_status_data[candidate_result_declared_index].date;
          d_yes.time = track_status_data[candidate_result_declared_index].time;
          d_yes.selected = track_status_data[candidate_result_declared_index].selected;
          this.given_candidate_data_with_result_yes.push(d_yes);
          this.table_with_result_yes = true;
        }
        else {
          var d_no = { 'candidate_email': '', 'interviewer_email': '', 'date': '', 'time': '', 'selected': '' };
          d_no.candidate_email = track_status_data[candidate_result_declared_index].candidate_email;
          d_no.interviewer_email = track_status_data[candidate_result_declared_index].interviewer_email;
          d_no.date = track_status_data[candidate_result_declared_index].date;
          d_no.time = track_status_data[candidate_result_declared_index].time;
          d_no.selected = track_status_data[candidate_result_declared_index].selected;
          this.given_candidate_data_with_result_no.push(d_no);
          this.table_with_result_no = true;
        }
      }
      else {
        console.log("candidate result is not declared yet but we check is this candiadte assigned or not");
        var candidate_assigned = 0;
        var candidate_assigned_index;
        var assign_interviewer_data = this.assign_interviewer_data;
        for (var i = 0; i < assign_interviewer_data.length; i++) {
          console.log("entered email:" + this.get_candidate_data_email);
          console.log("email at this point:" + assign_interviewer_data[i].candidate_email);
          console.log("entered password:" + this.get_candidate_data_password);
          console.log("password at this point:" + assign_interviewer_data[i].candidate_password);
          if ((this.get_candidate_data_email == assign_interviewer_data[i].candidate_email) &&
            (this.get_candidate_data_password == assign_interviewer_data[i].candidate_password)) {
            console.log("candidate assigned found");
            candidate_assigned = 1;
            candidate_assigned_index = i;
            break;
          }
        }
        if (candidate_assigned == 1) {
          console.log(" this candidate is assigned");
          var d2 = { 'candidate_email': '', 'interviewer_email': '', 'date': '', 'time': '', 'selected': '' };
          d2.candidate_email = assign_interviewer_data[candidate_assigned_index].candidate_email;
          d2.interviewer_email = assign_interviewer_data[candidate_assigned_index].interviewer_email;
          d2.date = assign_interviewer_data[candidate_assigned_index].date;
          d2.time = assign_interviewer_data[candidate_assigned_index].time;
          d2.selected = "pending";
          this.given_candidate_data_with_assigned.push(d2);
          this.table_with_assigned = true;
        }
        else {
          console.log("this candidate is not assigned yet");
          var d1 = { 'candidate_email': '', 'interviewer_email': '', 'date': '', 'time': '', 'selected': '' };
          d1.candidate_email = this.get_candidate_data_email;
          d1.interviewer_email = "not assigned";
          d1.date = "not assigned";
          d1.time = "not assigned";
          d1.selected = "not assigned";
          this.given_candidate_data_without_assigned.push(d1);
          this.table_without_assigned = true;
        }
      }
    }
    else {
      console.log("user is not registered");
      alert("either user is not registered or email or password is incorrect");
    }
  }
}
//Important code is:

// this._interviewportal.getUploadResumeData()
      // .subscribe(data => this.upload_resume_data=(data));
      // this._interviewportal.getAssignInterviewerData().subscribe(data =>this.assign_interviewer_data =data);
      // this._interviewportal.getTrackStatusData().subscribe(data =>this.track_status_data =data);

// let d=true;
//     let promise1=new Promise((resolve,reject)=>{
//       this._interviewportal.getUploadResumeData()
//       .subscribe(data => this.upload_resume_data=(data));
//       if(d)
//       {
//         resolve(this.upload_resume_data);
//       }
//       else{
//         reject('didnt get data')
//       }
//     });
//     promise1.then((message)=>{
//       console.log("upload data is:"+message);
//     }).catch((message)=>{
//       console.log(message);
//     });
//   getData()
  //   {
  //     this._interviewportal.getUploadResumeData().subscribe(data => this.upload_resume_data=(data));
  //     //this._interviewportal.getAssignInterviewerData().subscribe(data =>this.assign_interviewer_data =data);
  //     //this._interviewportal.getTrackStatusData().subscribe(data =>this.track_status_data =data);
  //     console.log("1:"+this.upload_resume_data);
  //     //console.log("length is:"+this.upload_resume_data.length);
  //   }
  //   geta()
  //   {
  //     console.log("2 before:");
  //     console.log("length is:"+this.upload_resume_data.length);
  //     var upload_resume_data1=this.upload_resume_data;
  //      for(var t=0;t<upload_resume_data1.length;t++)
  //      {
  //         this.get_candidate_data_email=upload_resume_data1[t].email;
  //         this.get_candidate_data_password=upload_resume_data1[t].password;
  //         this.processFun();

  //      }
  //      console.log("2 is after");
  //   }
  //   getConsole()
  //   {
  //    console.log("3rd");
  //   }
  //   async getAllData()
  //   {
  //    await this.getData();
  //    await this.geta();
  //    await this.getConsole();
  //   }

  ///other imp:)

  // getUploadResumeData() {
  //   // return this._interviewportal.getUploadResumeData()
  //   // .pipe(map(
  //   //   (users) => {
  //   //     console.log('users1 ' + JSON.stringify(users));
  //   //     this.upload_resume_data = users;
  //   //     console.log('this.users2 ' + this.upload_resume_data);
  //   //   }))
  //   //  .pipe(catchError((error) => {
  //   //     console.log('error ' + error);
  //   //     throw error;
  //   //   }));
  //  // this._interviewportal.getUploadResumeData().subscribe(data => this.upload_resume_data=(data));
  //  return this.http.get('http://localhost:3000/uploadResumeData')
  //  .toPromise();
  // }
  // getAssignInterviewerData()
  // {
  //   return this._interviewportal.getAddInterviewerData()
  //   .pipe(map(
  //     (users) => {
  //       console.log('users4 ' + JSON.stringify(users));
  //       this.assign_interviewer_data= users;
  //       console.log('this.users5 ' + this.assign_interviewer_data);
  //     }))
  //    .pipe(catchError((error) => {
  //       console.log('error ' + error);
  //       throw error;
  //     }));
  // }
  // getTrackStatusData()
  // {
  //   return this._interviewportal.getAddInterviewerData()
  //   .pipe(map(
  //     (users) => {
  //       console.log('users7 ' + JSON.stringify(users));
  //       this.track_status_data= users;
  //       console.log('this.users8 ' + this.track_status_data);
  //     }))
  //    .pipe(catchError((error) => {
  //       console.log('error ' + error);
  //       throw error;
  //     }));
  // }
  // geta()
  //   {
  //     console.log("10:");
  //     // console.log("11length is:"+this.upload_resume_data.length);
  //     // var upload_resume_data1=this.upload_resume_data;
  //     //  for(var t=0;t<upload_resume_data1.length;t++)
  //     //  {
  //     //     this.get_candidate_data_email=upload_resume_data1[t].email;
  //     //     this.get_candidate_data_password=upload_resume_data1[t].password;
  //     //     this.processFun();

  //     //  }
  //      console.log("12 is after");
  //   }

  // ngOnInit() {



  //   this.getAllData();
  // }
  //    async getAllData()
  //   {
  //   //  await this.getCandidateData().subscribe(_ => {;
  //   //   console.log('ngOnit after getUsers3() ' + this.upload_resume_data);
  //   // });
  //   const a=await this.getCandidateData();
  //   await this.getAssignInterviewerData().subscribe(_ => {;
  //     console.log('ngOnit after getUsers6() ' + this.upload_resume_data);
  //   });
  //   await this.getTrackStatusData().subscribe(_ => {;
  //     console.log('ngOnit after getUsers9() ' + this.upload_resume_data);
  //   });
  //    await this.geta();
  //   console.log("0:"+a);
  //   }

