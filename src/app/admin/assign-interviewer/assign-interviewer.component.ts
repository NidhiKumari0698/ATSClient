import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { InterviewportalService } from 'src/app/interviewportal.service';

@Component({
  selector: 'app-assign-interviewer',
  templateUrl: './assign-interviewer.component.html',
  styleUrls: ['./assign-interviewer.component.css']
})
export class AssignInterviewerComponent implements OnInit {
  
  // upload_resume_data: any;
  // add_interviewer_data: any;
  // assign_interviewer_data: any;
  // track_status_data: any;
  // candidate_email_data = [];
  // interviewer_email_data = [];
  // rForm: FormGroup;
  // post: any;
  constructor(private fb: FormBuilder, private _interviewportalservice: InterviewportalService) {
    // this.rForm = fb.group({
    //   'candidate_email': [null, Validators.required],
    //   'interviewer_email': [null, Validators.required],
    //   'date': [null, Validators.required],
    //   'time': [null, Validators.required]
    // })
  };
  async ngOnInit() {
    // console.log("inside assign-interviewer-component init");
    
    // this._interviewportalservice.getCandidateDataPromise().then((data)=>{
    //   console.log("HERE", data);
    //   this.upload_resume_data = data;
    // })
    // this.add_interviewer_data = await this._interviewportalservice.getAddInterviewerDataPromise();
    // this.assign_interviewer_data = await this._interviewportalservice.getAssignInterviewerDataPromise();
    // this.track_status_data = await this._interviewportalservice.getTrackStatusDataPromise();
    // var candidate_email_data_index = 0;
    // var candidate_data = this.upload_resume_data;
    // console.log("candidate_data.length is:" + candidate_data.length);
    // for (var i1 = 0; i1 < candidate_data.length; i1++) {
    //   var c_email_in_candidate_data = candidate_data[i1].email;
    //   var allowed = 1;
    //   var assign_interviewer_data_1 = this.assign_interviewer_data;
    //   console.log("assign_interviewer_data1.length is:" + assign_interviewer_data_1.length);
    //   for (var k1 = 0; k1 < assign_interviewer_data_1.length; k1++) {
    //     var c_email_in_assign_interviewer_data_1 = assign_interviewer_data_1[k1].candidate_email;
    //     if (c_email_in_candidate_data == c_email_in_assign_interviewer_data_1) {
    //       allowed = 0;
    //     }
    //   }
    //   if (allowed == 1) {
    //     var add_this_email = 1;
    //     var data = this.track_status_data;
    //     console.log("data length is:" + data.length);
    //     for (var d1 = 0; d1 < data.length; d1++) {
    //       if (c_email_in_candidate_data == data[d1].candidate_email) {
    //         add_this_email = 0;
    //       }
    //     }
    //     if (add_this_email == 1) {
    //       this.candidate_email_data[candidate_email_data_index] = c_email_in_candidate_data;
    //       candidate_email_data_index++;
    //     }
    //     else {
    //       console.log(c_email_in_candidate_data + " " + "result is out");
    //     }
    //   }
    //   else {
    //     console.log(c_email_in_candidate_data + "this candidate is removed from candidate-list");
    //   }
    // }
    // var interviewer_data = this.add_interviewer_data;
    // console.log("interviewer_data.length is:" + interviewer_data.length);
    // for (var j1 = 0; j1 < interviewer_data.length; j1++) {
    //   this.interviewer_email_data[j1] = interviewer_data[j1].email;
    //   console.log(this.interviewer_email_data[j1]);
    // }
    // console.log("one more", this.candidate_email_data);
  };
  // change_in_dropdown(post2) {
  //   var index_k2;
  //   for (var k2 = 0; k2 < this.candidate_email_data.length; k2++) {
  //     console.log("candidate_email_data.length is:" + this.candidate_email_data.length);
  //     if (this.candidate_email_data[k2] == post2) {
  //       index_k2 = k2;
  //       console.log("post is:" + post2);
  //       console.log("email at index2 is" + this.candidate_email_data[index_k2]);
  //     }
  //   }
  //   console.log("index of data deleted is:" + index_k2);
  //   this.candidate_email_data.splice(index_k2, 1);
  // };
//   addPost(post) {
//     var i_email = post.interviewer_email;
//     var i_date = post.date;
//     var i_time = post.time;
//     var allowed_interviewer = 1;
//     var data = this.assign_interviewer_data;
//     for (var k3 = 0; k3 < data.length; k3++) {
//       if ((i_email == data[k3].interviewer_email) &&
//         (i_date == data[k3].date) &&
//         (i_time == data[k3].time)) {
//         allowed_interviewer = 0;
//         break;
//       }
//     }
//     if (allowed_interviewer == 0) {
//       alert(i_email + "is already assigned on same date and same time");
//     }
//     else {
//       var arr = {
//         'candidate_email': '', 'interviewer_email': '',
//         'date': '', 'time': '', 'interviewer_password': '', 'candidate_password': ''
//       };
//       arr.candidate_email = post.candidate_email;
//       arr.interviewer_email = post.interviewer_email;
//       arr.date = post.date;
//       arr.time = post.time;
//       for (var i = 0; i < this.add_interviewer_data.length; i++) {
//         if (post.interviewer_email == this.add_interviewer_data[i].email) {
//           console.log("get password of interviewer");
//           arr.interviewer_password = this.add_interviewer_data[i].password;
//         }
//       }
//       for (var j = 0; j < this.upload_resume_data.length; j++) {
//         if (post.candidate_email == this.upload_resume_data[j].email) {
//           console.log("get password of candidate");
//           arr.candidate_password = this.upload_resume_data[j].password;
//         }
//       }
//       this.assign_interviewer_data.push(arr);
//      // localStorage.setItem("assign_interviewer_data_key", JSON.stringify(this.assign_interviewer_data));
//      this._interviewportalservice.setAssignInterviewerData(arr).subscribe((res)=>{
//       console.log("res is:"+res);
//     });
//       this.change_in_dropdown(post.candidate_email);

//     }
//   }
}
