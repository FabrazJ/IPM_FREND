import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body_nav',
  templateUrl: './body_nav.component.html',
  styleUrls: []
})
export class Body_navComponent implements OnInit {
  
  
  isUserCreateVisible: boolean = false;
  isDashboardVisible: boolean = true;


  isDropdownOpen = false;
  isDropdownOpen1 = false;
  
  constructor() { }

  ngOnInit() {
  }

  
  toggleUserCreate() {
    this.isUserCreateVisible = true; // Asegúrate de ocultar el otro componente
    this.isDashboardVisible = false; // Asegúrate de ocultar el otro componente

  }
  
  toggleDashboard() {
    this.isDashboardVisible = true;

    // this.isDashboardVisible = !this.isDashboardVisible;
    this.isUserCreateVisible = false; // Asegúrate de ocultar el otro componente

  }

  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }
}
