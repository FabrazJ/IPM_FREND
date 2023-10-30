import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('drawerNavigation', { static: true }) drawerNavigation: ElementRef;

  constructor(private renderer: Renderer2) {
    this.drawerNavigation = new ElementRef(null);
  }

  isMenuOpen = false;
  isUserCreateVisible: boolean = false;

  isDropdownOpen = false;
  isDropdownOpen1 = false;

  ngOnInit() {
    this.toggleUserCreate();
  }

  toggleUserCreate() {
    this.isUserCreateVisible = !this.isUserCreateVisible;
  }
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  
   
  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }
  
}