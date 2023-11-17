import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body_nav',
  templateUrl: './body_nav.component.html',
  styleUrls: []
})
export class Body_navComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  isDashboardVisible: boolean = true;

  isUserCreateVisible: boolean = false;
  isRolCreateVisible: boolean = false;
  isTRVisible: boolean = false;
  isScAVisible: boolean= false;


  isDropdownOpen = false;
  isDropdownOpen1 = false;
  
  //

  toggleUserCreate() {
    this.isUserCreateVisible = true; 
    this.isDashboardVisible = false; 
    this.isTRVisible = false; 
    this.isRolCreateVisible=false;
    this.isScAVisible=false;


  }
  
  toggleRol(){
    this.isRolCreateVisible=true;
    this.isDashboardVisible=false;
    this.isTRVisible = false; 
    this.isUserCreateVisible=false;
    this.isScAVisible=false;

  }

  toggleDashboard() {
    this.isDashboardVisible = true;
    // this.isDashboardVisible = !this.isDashboardVisible;
    this.isUserCreateVisible = false; 
    this.isRolCreateVisible=false;
    this.isTRVisible = false;   
    this.isScAVisible=false;


  }

  toggleScA(){
    this.isScAVisible=true;
    this.isTRVisible=false;
    this.isDashboardVisible=false;
    this.isUserCreateVisible = false; 
    this.isRolCreateVisible=false;

  }
  toggleTR(){
    this.isTRVisible=true;
    this.isDashboardVisible=false;
    this.isUserCreateVisible = false; 
    this.isRolCreateVisible=false;
    this.isScAVisible=false;

  }

  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }
}
