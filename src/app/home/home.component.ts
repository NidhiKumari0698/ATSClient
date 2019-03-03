import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InterviewportalService } from '../interviewportal.service';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  candidate_data: any;
  add_interviewer_data: any;
  login_data: any;
  constructor(private fb: FormBuilder, private router: Router, private _interviewportalservice: InterviewportalService) { }
  homeForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  async ngOnInit() {
    this.candidate_data = await this._interviewportalservice.getCandidateDataPromise();
    this.add_interviewer_data = await this._interviewportalservice.getAddInterviewerDataPromise();
    // this.login_data=await this._interviewportalservice.getLoginDataPromise();
  }
  onSubmit(post) {
    var home_email = post.email;
    var home_password = post.password;
    if ((home_email == "admin@gmail.com") && (home_password == "admin12345")) {
      console.log("the login person is admin");
      this.router.navigateByUrl('/admin-login');
    }
    else {

      var objnew = { 'email': '', 'password': '' }
      objnew.email = home_email
      objnew.password = home_password
      this._interviewportalservice.setLoginData(objnew).subscribe((res) => {
        if (res.success) {
          const decodeToken = helper.decodeToken(res.token)
          console.log('decode token is:',decodeToken);
          console.log(decodeToken);
          if (decodeToken.role == 'candidate') {
            console.log('candidate is found');
            var obj2 = {
              get_loginId: '',


            }
            obj2.get_loginId = decodeToken.loginId;

            this.router.navigate(['/login-as-candidate'], { state: obj2 });

          }

          if (decodeToken.role == 'interviewer') {
            console.log('interviewer is found');
            var obj = {
              get_loginId: '',


            }
            obj.get_loginId = decodeToken.loginId;
            this.router.navigate(['/interviewerhome'], { state: obj });

          }
        }
      })
    }
  }
}

      // var found=0;
      // var foundIndex;
      // for(var i=0;i<this.login_data.length;i++)
      // {
      //   if((this.login_data[i].email== home_email)&&(this.login_data[i].password==home_password))
      //   {
      //     found=1;
      //     foundIndex=i;
      //     break;
      //   }
      // }
      // if(found)
      // {
      //   var role=this.login_data[foundIndex].role;
      //   console.log('role is',role);
      //   if(role=='candidate')
      //   {
      //     console.log('candidate is found');
      //     for(var j=0;j<this.candidate_data.length;j++)
      //     {
      //       if(this.candidate_data[j].PersonalInfo.email==home_email)
      //       {
      //         var obj2 = {
      //           get_candidate_email: '',
      //           //get_candidate_password: ''
      //         }
      //         obj2.get_candidate_email = this.candidate_data[j].PersonalInfo.email;
      //         //obj2.get_candidate_password = get_candidate_password;
      //         this.router.navigate(['/login-as-candidate'], { state: obj2 });
      //         break;
      //       }
      //     }
      //   }
      //   if(role=='interviewer')
      //   {
      //     console.log('interviewer is found');
      //     for(var j=0;j<this.add_interviewer_data.length;j++)
      //     {
      //       if(this.add_interviewer_data[j].email==home_email)
      //       {
      //         var obj = {
      //           get_interviewer_email: '',
      //           //get_interviewer_password: ''
      //         }
      //         obj.get_interviewer_email = this.add_interviewer_data[j].email;
      //         //obj.get_interviewer_password = get_interviewer_password;
      //         this.router.navigate(['/interviewerhome'], { state: obj });
      //         break;
      //       }
      //     }
      //   }
      // }


