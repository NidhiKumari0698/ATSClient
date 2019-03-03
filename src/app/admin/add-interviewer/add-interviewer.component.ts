import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InterviewportalService } from 'src/app/interviewportal.service';
@Component({
  selector: 'app-add-interviewer',
  templateUrl: './add-interviewer.component.html',
  styleUrls: ['./add-interviewer.component.css']
})
export class AddInterviewerComponent implements OnInit {
  add_interviewer_data: any;
  constructor(private fb: FormBuilder, private _interviewportalservice: InterviewportalService) { }
  addInterviewerForm = this.fb.group({
    email: ['@gmail.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(8)]],
    role: ['abc', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    mobile:['9876543211']
  });
  async ngOnInit() {
    console.log("hello");
    this.add_interviewer_data = await this._interviewportalservice.getAddInterviewerDataPromise();
  }
  onSubmit(post) {
    console.log("hello add interviewer");
    console.log((localStorage.getItem('add_interviewer_data_key')));
    console.log(localStorage.getItem('add_interviewer_data_key') != null);
    var arr={ 'email':'',
      'password':'',
      'role':'',
    'mobile':null}
      arr.email=post.email;
      arr.password=post.password;
      arr.role=post.role;
      arr.mobile=post.mobile;
    //this.add_interviewer_data.push(this.addInterviewerForm.value)
    //localStorage.setItem("add_interviewer_data_key", JSON.stringify(this.add_interviewer_data));
    this._interviewportalservice.setAddInterviewerData(arr).subscribe((res)=>{
      console.log("res is:"+res);
    });
    this.addInterviewerForm.reset();
  };
}
