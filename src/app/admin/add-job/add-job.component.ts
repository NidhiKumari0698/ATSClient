import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InterviewportalService } from 'src/app/interviewportal.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  add_job_data:any;
  constructor(private fb: FormBuilder, private _interviewportalservice: InterviewportalService) { }
  addJobForm = this.fb.group({
    posting_title: ['MeanStackDeveloper'],
    city:['Gurgaon'],
    state:['Haryana'],
    country:['India'],
    date_open:['2/02/2018'],
    date_close:['2/3/2018'],
    job_type:['full-time'],
    salary:['5.5LPA'],
    position_summary:['Very Good'],
    job_respo:['MEAN Expert'],
    
  });

  async ngOnInit() {
    this.add_job_data = await this._interviewportalservice.getAddJobData();
  }

  onSubmit(post){
    this._interviewportalservice.setAddJobData(post).subscribe(res => {
      console.log(res);
      console.log('save');
    });
    this.addJobForm.reset(); 
  }

}
