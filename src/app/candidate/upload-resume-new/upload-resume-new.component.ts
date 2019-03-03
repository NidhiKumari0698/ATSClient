import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms'
import { InterviewportalService } from 'src/app/interviewportal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-resume-new',
  templateUrl: './upload-resume-new.component.html',
  styleUrls: ['./upload-resume-new.component.css']
})

export class UploadResumeNewComponent implements OnInit {
  candidateForm: FormGroup;
  email: any;
  emailExistant: boolean = false;
  upload_resume_data: any;
  loaded: boolean = false;
  isValid: boolean = true;
  get_job_data: any;
  get_job_data_id: any;
  get_job_data_posting_title: any;
  constructor(private fb: FormBuilder, private _interviewportalservice: InterviewportalService, private router: Router) {
    this.get_job_data = this.router.getCurrentNavigation().extras.state;
    console.log("job details are", this.get_job_data);
    this.get_job_data_id = this.get_job_data._id;
    this.get_job_data_posting_title = this.get_job_data.posting_title;
    this.candidateForm = this.fb.group({
      'firstname': ['a', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      'lastname': ['singh', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      'email': ['@gmail.com', [Validators.required, Validators.email, this.emailExisteValidation.bind(this)]],
      'password': ['12345678', [Validators.required, Validators.minLength(8)]],
      'mobile': ['9876543211', [Validators.required, Validators.pattern('^[789][0-9]{9}$')]],
      'otp': ['123456'],
      'prev_comp': ['infosys'],
      'prev_sal': ['5LPA'],
      'exp_year': ['1', [Validators.required, Validators.pattern('^[0-9]+$')]],
      'exp_month': ['1', [Validators.required, Validators.min(0), Validators.max(11)]],
      'refname': ['shivam gupta'],
      'refemail': ['shivamgupta@gmail.com'],
      'refrelation': ['senior'],
      'refmobile': ['9876543211'],
      'city': ['patna'],
      'state': ['bihar'],
      'postalcode': ['800020'],
      'country': ['india'],
      'resume': ["aaa.txt", Validators.required],
      'video': ["vid.mp4", Validators.required],
      'hyear':[2013],
      'hboard':['BSEB'],
      'hschool':['Girls School'],
      'hpercentage':[80.04],
      'iyear':[2015],
      'iboard':['BSEB'],
      'ischool':['Girls School'],
      'ipercentage':[73.4],
      'gyear':[2019],
      'gcourse':['B.tech'],
      'gcollege':['Dit University'],
      'guniversity':['Dit University'],
      'gstream':['IT'],
      'gcgpa':['NA'],
      'oyear':['NA'],
      'ocourse':['NA'],
      'ocollege':['NA'],
      'ouniversity':['NA'],
      'ostream':['NA'],
      'ocgpa':['NA'],
      
    });
    this.email = this.candidateForm.controls['email'];
  }
  async ngOnInit() {
    this._interviewportalservice.getCandidateDataPromise().then(
      (res) => {
        this.upload_resume_data = res;
        this.loaded = true;
      });
    //this.upload_resume_data = await this._interviewportalservice.getCandidateDataPromise();
  }
  emailExisteValidation(c: FormControl) {
    if (this.loaded && this.upload_resume_data) {
      console.log("cdcdcdc111222:" + this.upload_resume_data);
      var valid = 1;
      var found_index;
      var upload_data = this.upload_resume_data;
      for (var i = 0; i < upload_data.length; i++) {
        if (upload_data[i].email == c.value) {
          valid = 0;
          found_index = i;
          break;
        }
      }
      if (valid == 0) {
        this.emailExistant = true;
        console.log("emailexistent is:" + this.emailExistant);
        console.log("found same");
      }
      else {
        console.log("found different");
        this.emailExistant = false;
      }
    }
  }
  onSubmit(post) {
    // var arr = {
    //  firstname:'', lastname: '',email:'',password:'',mobile:null,otp:null,prev_comp:'',prev_sal:'',
    //   exp_year:null,exp_month: null,refname:'',refemail:'',refrelation:'',refmobile:null,resume:'',video: '',jobId:'',jobPostingTitle:'',
    //   address:{city:'',state:'',postalcode:'',country:'',}

    // };
    var arr = {
      PersonalInfo:
      {
        firstname: '',
        lastname: '',
        email: '',
        mobile: null,
        otp: null,
        address: {
          city: '',
          state: '',
          postalcode: '',
          country: '',
        },
        resume: '',
        video: '',
      },
      WorkExperience: {
        prev_comp: '',
        prev_sal: '',
        exp_year: null,
        exp_month: null,
      },
      ReferenceDetails:
      {
        refname: '',
        refemail: '',
        refrelation: '',
        refmobile: null,
      },
      JobDetails: {
        jobId: '',
        jobPostingTitle: ''
      },
      AcademicDetails: {
        HighSchool: { passyear: '', board: '', school: '', percentage: '' },
        Intermediate: { passyear: '', board: '', school: '', percentage: '' },
        Graduation: { passyear: '', course: '', college: '', university: '', stream: '', cgpa: '' },
        Others: { passyear: '', course: '', college: '', university: '', stream: '', cgpa: '' }

      },
      password: '',
    }

    arr.PersonalInfo.firstname = post.firstname;
    arr.PersonalInfo.lastname = post.lastname;
    arr.PersonalInfo.email = post.email;
    arr.password = post.password;
    arr.PersonalInfo.mobile = post.mobile;
    arr.PersonalInfo.otp = post.otp;
    arr.PersonalInfo.address = {
      city: post.city, state: post.state,
      postalcode: post.postalcode, country: post.country
    },
      arr.PersonalInfo.resume = post.resume.substr(post.resume.lastIndexOf("\\") + 1);
    arr.PersonalInfo.video = post.video.substr(post.video.lastIndexOf("\\") + 1);
    console.log('address is', arr.PersonalInfo.address);
    arr.WorkExperience.prev_comp = post.prev_comp;
    arr.WorkExperience.prev_sal = post.prev_sal;
    arr.WorkExperience.exp_year = post.exp_year;
    arr.WorkExperience.exp_month = post.exp_month;
    arr.ReferenceDetails.refname = post.refname;
    arr.ReferenceDetails.refemail = post.refemail;
    arr.ReferenceDetails.refrelation = post.refrelation;
    arr.ReferenceDetails.refmobile = post.refmobile;


    arr.JobDetails.jobId = this.get_job_data_id;
    arr.JobDetails.jobPostingTitle = this.get_job_data_posting_title;

    arr.AcademicDetails.HighSchool.passyear = post.hyear;
    arr.AcademicDetails.HighSchool.board = post.hboard;
    arr.AcademicDetails.HighSchool.school = post.hschool;
    arr.AcademicDetails.HighSchool.percentage = post.hpercentage;

    arr.AcademicDetails.Intermediate.passyear = post.iyear;
    arr.AcademicDetails.Intermediate.board = post.iboard;
    arr.AcademicDetails.Intermediate.school = post.ischool;
    arr.AcademicDetails.Intermediate.percentage = post.ipercentage;

    arr.AcademicDetails.Graduation.passyear = post.gyear;
    arr.AcademicDetails.Graduation.course = post.gcourse;
    arr.AcademicDetails.Graduation.college = post.gcollege;
    arr.AcademicDetails.Graduation.university = post.guniversity;
    arr.AcademicDetails.Graduation.stream = post.gstream;
    arr.AcademicDetails.Graduation.cgpa = post.gcgpa;

    arr.AcademicDetails.Others.passyear = post.oyear;
    arr.AcademicDetails.Others.course = post.ocourse;
    arr.AcademicDetails.Others.college = post.ocollege;
    arr.AcademicDetails.Others.university = post.ouniversity;
    arr.AcademicDetails.Others.stream = post.ostream;
    arr.AcademicDetails.Others.cgpa = post.ocgpa;


    this.upload_resume_data.push(arr);
    this._interviewportalservice.setCandidateData(arr).subscribe(res => {
      console.log(res);
      console.log('save');
    });
    this.candidateForm.reset();
  }
  fileChange1($event) {
    console.log(event)
    this.candidateForm.controls['resume'].setValue($event.target.files[0].firstname);
  }
  fileChange2($event) {
    this.candidateForm.controls['video'].setValue($event.target.files[0].firstname);
  }
}
// localStorage.setItem("upload_resume_data_key", JSON.stringify(this.upload_resume_data));
 //this.upload_resume_data = await this._interviewportalservice.getCandidateDataPromise();
   // onChange(event){
  //     if( this.loaded && this.upload_resume_data ){
  //       // console.log(this.upload_resume_data);
  //       // console.log(event.target.value);
  //       // console.log("CALLED");
  //       this.upload_resume_data.map(obj => {
  //         if(obj.email === event.target.value){
  //           console.log("INSIDE IF")
  //           this.isValid = false;
  //         }else{
  //           this.isValid = true;
  //         }
  //       })
  //     }

  // }
      //console.log("::" + this.candidateForm.value.email);
    // this.upload_resume_data = await this._interviewportalservice
    // this.emailExisteValidation.bind(this)
