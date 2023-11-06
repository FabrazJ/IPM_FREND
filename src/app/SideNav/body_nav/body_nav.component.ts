import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body_nav',
  templateUrl: './body_nav.component.html',
  styleUrls: []
})
export class Body_navComponent implements OnInit {
  
  
  isUserCreateVisible: boolean = false;
  isDashboardVisible: boolean = false;


  isDropdownOpen = false;
  isDropdownOpen1 = false;
  
  constructor() { }

  ngOnInit() {
  }

  
  toggleUserCreate() {
    this.isUserCreateVisible = !this.isUserCreateVisible;
  }
  
  toggleDashboard() {
    this.isDashboardVisible = !this.isDashboardVisible;
  }

  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }
}
