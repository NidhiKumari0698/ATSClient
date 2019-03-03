export interface loginData{
  success:Boolean
  token:string
  

}

export interface jobAndCandidateData{
  jobPostingTitle: String,
  jobId: String,
  candidateId: String,
  candidateEmail: String,
  candidateStatus: String,
  recentResponse:[{round1:Number,interviewerEmail1:String,response1:String,date1:String,time1:String}],
  previousResponse:[{ round: Number, interviewerEmail: String, response: String, date: String, time: String }],
}
export interface candidateData
{
    PersonalInfo:
    {
      firstname: String,
      lastname: String,
      email: String,
      mobile: Number,
      otp: Number,
      address: {
        city: String,
        state: String,
        postalcode: String,
        country: String,
      },
      resume: String,
      video: String,
    },
    WorkExperience: {
      prev_comp: String,
      prev_sal: String,
      exp_year: Number,
      exp_month: Number,
    },
    ReferenceDetails:
    {
      refname: String,
      refemail: String,
      refrelation: String,
      refmobile: Number,
    },
    JobDetails: {
      jobId: String,
      jobPostingTitle: String
    },
    AcademicDetails:{
      HighSchool:{passyear:String,board:String,school:String,percentage:String},
      Intermediate:{passyear:String,board:String,school:String,percentage:String},
      Graduation:{passyear:String,course:String,college:String,university:String,stream:String,cgpa:String},
      Others:{passyear:String,course:String,college:String,university:String,stream:String,cgpa:String}
    },
    password:string
   
   
};
export interface addJobData{
    posting_title:string,
    city:string,
    state:string,
    country:string,
    date_open:string,
    date_close:string,
    job_type:string,
    salary:string,
    position_summary:string,
    job_respo:string,
};

export interface addInterviewerData
{
  email: String,
  mobile: Number,
  role: String
    
};
export interface assignInterviewerData
{
    candidate_email:string,
    candidate_id:string,
    interviewer_email:string,
    date:string,
    time:string,
    jobPostingTitle:string,
    jobId:string,
    resume:String,
    video:String
    
};
export interface trackStatusData
{
    candidate_email:string,
    interviewer_email:string;
    date:string;
    time:string;
    selected:string;
    
};
