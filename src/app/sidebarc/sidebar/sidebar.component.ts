import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isUserCreateVisible: boolean = false;

  toggleUserCreate() {
    this.isUserCreateVisible = !this.isUserCreateVisible;
  }
  ngOnInit() {
    this.toggleUserCreate();
  }
  
}
