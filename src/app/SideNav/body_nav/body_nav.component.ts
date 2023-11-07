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

  isDropdownOpen = false;
  isDropdownOpen1 = false;
  

  toggleUserCreate() {
    this.isUserCreateVisible = true; 
    this.isDashboardVisible = false; 
    this.isTRVisible = false; 
    this.isRolCreateVisible=false;


  }
  
  toggleRol(){
    this.isRolCreateVisible=true;
    this.isDashboardVisible=false;
    this.isTRVisible = false; 
    this.isUserCreateVisible=false;

  }

  toggleDashboard() {
    this.isDashboardVisible = true;
    // this.isDashboardVisible = !this.isDashboardVisible;
    this.isUserCreateVisible = false; 
    this.isRolCreateVisible=false;
    this.isTRVisible = false;


  }

  toggleTR(){
    this.isTRVisible=true;
    this.isDashboardVisible=false;
  }

  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }
}
