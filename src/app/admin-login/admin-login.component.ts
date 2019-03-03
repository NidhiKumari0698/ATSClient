import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

	public isSelectedAddJob=false;
  public isSelectedAdd=false;
	  public isSelectedAssign=false;
		public isSelectedStatus=false;
		public isSelectedLogout=false;
	  constructor() { }
	
	  ngOnInit() {
		}
		public clickedAddJob(){
			this.isSelectedLogout=false;
			this.isSelectedAdd=false;
		 this.isSelectedAssign=false;
		 this.isSelectedStatus=false;
		 this.isSelectedAddJob=true;
		}
	public clickedAdd(){
		this.isSelectedAdd=true;
		this.isSelectedAddJob=false;
	  this.isSelectedAssign=false;
		this.isSelectedStatus=false;
		this.isSelectedLogout=false;
	
	}
	public clickedAssign(){
		this.isSelectedAddJob=false;
	  this.isSelectedAdd=false;
	  this.isSelectedAssign=true;
		this.isSelectedStatus=false;
		this.isSelectedLogout=false;
	
	}
	public clickedStatus(){
		this.isSelectedAddJob=false;
	  this.isSelectedAdd=false;
	  this.isSelectedAssign=false;
		this.isSelectedStatus=true;
		this.isSelectedLogout=false;
	
	}
	public logout(){
      this.isSelectedLogout=true;
     this.isSelectedAdd=false;
	  this.isSelectedAssign=false;
		this.isSelectedStatus=false;
		this.isSelectedAddJob=false;
	}
}
