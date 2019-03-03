import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { candidateData, addInterviewerData, assignInterviewerData, trackStatusData, addJobData,jobAndCandidateData, loginData } from './localstorageData';
import { Observable } from 'rxjs';
import { resolve } from 'dns';
import { reject } from 'q';



@Injectable({
  providedIn: 'root'
})
export class InterviewportalService {
  private _url: string = "http://localhost:3001/api";
  constructor(private http: HttpClient) { }

  
  setLoginData(data1:any) : Observable<loginData>{
    return  this.http.post<loginData>((this._url+"/loginData"),data1,
      {
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      })
    }
  getJobAndCandidate():Observable<jobAndCandidateData[]>{
    return this.http.get<jobAndCandidateData[]>(this._url+'/jobAndCandidate');
  }

  getJobAndCandidatePromise()
  {
    return new Promise((resolve,reject) =>{
      return this.getJobAndCandidate().subscribe(res => {
        console.log("<<<job and candidate is:",res);
        resolve(res);
      })
    })
  }

  getDetailsInJobAndCandidate(data1:any): Observable<any[]> {
    return this.http.get<any[]>(`${this._url}/jobAndCandidate/Details/${data1.jobId}/${data1.loginId}`);

  }
  getDetailInAssignInterviewerData(data1:any): Observable<any[]> {
    return this.http.get<any[]>(`${this._url}/assignInterviewerData/Details/${data1.jobId}/${data1.loginId}`);

  }

  updateStatusJobAndCandidate(data1:any) : Observable<any>{
    return  this.http.post<any>(`${this._url}/jobAndCandidate/status/${data1.jobId}/${data1.candidateId}`,data1,
      {
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      })
    }

    updateRecentResponseJobAndCandidate(data1:any) : Observable<any>{
      return  this.http.post<any>(`${this._url}/jobAndCandidate/recentResponse/${data1.jobId}/${data1.candidateId}`,data1,
        {
          headers:new HttpHeaders({
            'Content-Type':'application/json'
          })
        })
      }
  getCandidateData(): Observable<candidateData[]> {
    return this.http.get<candidateData[]>(this._url + "/candidateData");

  }
  
  getCandidateDataPromise() {
    return new Promise((resolve, reject) => {
      return this.getCandidateData().subscribe(res => {
        console.log(">>>",res);
        resolve(res);
      })
    })
  }

  getJobInCandidateData(data1:any): Observable<any[]> {
    return this.http.get<any[]>(`${this._url}/candidateData/job/${data1}`);

  }
  setCandidateData(data1:candidateData) : Observable<candidateData[]>{
  return  this.http.post<candidateData[]>((this._url+"/candidateData"),data1,
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  getAddJobData(): Observable<addJobData[]> {
    return this.http.get<addJobData[]>(this._url + "/addJobData");

  }
  getAddJobDataPromise() {
    return new Promise((resolve, reject) => {
      return this.getAddJobData().subscribe(res => {
        console.log(">>>",res);
        resolve(res);
      })
    })
  }
  setAddJobData(data1:addJobData) : Observable<addJobData[]>{
  return  this.http.post<addJobData[]>((this._url+"/addJobData"),data1,
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

  getAddInterviewerData(): Observable<addInterviewerData[]> {
    return this.http.get<addInterviewerData[]>(this._url + "/addInterviewerData");

  }
  getAddInterviewerDataPromise() {
    return new Promise((resolve, reject) => {
      this.getAddInterviewerData().subscribe(res => {
        resolve(res);
      })
    })
  }
  setAddInterviewerData(data2:addInterviewerData) : Observable<addInterviewerData[]>{
    return  this.http.post<addInterviewerData[]>((this._url+"/addInterviewerData"),data2,
      {
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      })
    }
  getAssignInterviewerData(): Observable<assignInterviewerData[]> {
    return this.http.get<assignInterviewerData[]>(this._url + "/assignInterviewerData");

  }
  getAssignInterviewerDataPromise() {
    return new Promise((resolve, reject) => {
      this.getAssignInterviewerData().subscribe(res => {
        resolve(res);
      })
    })
  }
  setAssignInterviewerData(data3:assignInterviewerData) : Observable<assignInterviewerData[]>{
    return  this.http.post<assignInterviewerData[]>((this._url+"/assignInterviewerData"),data3,
      {
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      })
    }

  //:Observable <assignInterviewerData[]>
    deleteAssignedDataPromise(id: string){
      // return this.http.delete<any>(`${this._url}/assignInterviewerData/${id}`);
      return new Promise((resolve, reject)=>{
        return this.http.delete<any>(`${this._url}/assignInterviewerData/${id}`).subscribe(res=>{
          resolve(res);
        })
      })
      // return  this.http.delete<assignInterviewerData[]>(this._url+"/assignInterviewerData/"+id)
      }

      updateActiveAssignInterviewerData(data1:any) : Observable<any>{
        return  this.http.post<any>(`${this._url}/assignInterviewerData/active/${data1.jobId}/${data1.candidateId}`,data1,
          {
            headers:new HttpHeaders({
              'Content-Type':'application/json'
            })
          })
        }
    

  getTrackStatusData(): Observable<trackStatusData[]> {
    return this.http.get<trackStatusData[]>(this._url + "/trackStatusData");
    
  }
  getTrackStatusDataPromise() {
    return new Promise((resolve, reject) => {
      this.getTrackStatusData().subscribe(res => {
        resolve(res);
      })
    })
  }
  
  setTrackStatusData(data4:trackStatusData) : Observable<trackStatusData[]>{
    return  this.http.post<trackStatusData[]>((this._url+"/trackStatusData"),data4,
      {
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      })
    }
}
//important code:
// if(localStorage.getItem("track_status_data_key")!=null){
    //   return JSON.parse(localStorage.getItem("track_status_data_key"));
    //   }
    //   else{
    //     return new Array;
    //   }
