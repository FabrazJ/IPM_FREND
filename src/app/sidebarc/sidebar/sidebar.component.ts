import { Component,Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  @ViewChild('drawerNavigation', { static: true }) drawerNavigation: ElementRef;

  constructor(private renderer: Renderer2) {
    this.drawerNavigation = new ElementRef(null);
  }

  isMenuOpen = false;

  isUserCreateVisible: boolean = true;
  isDashboardVisible: boolean = false;


  isDropdownOpen = false;
  isDropdownOpen1 = false;

  ngOnInit() {
    this.toggleUserCreate();
    this.toggleDashboard();
  }

  toggleUserCreate() {
    this.isUserCreateVisible = !this.isUserCreateVisible;
  }
  
  toggleDashboard() {
    this.isDashboardVisible = !this.isDashboardVisible;
  }
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  
   
  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }
  
}