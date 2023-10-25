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
  
  ngOnInit() {
    this.toggleUserCreate();
  }

  toggleUserCreate() {
    this.isUserCreateVisible = !this.isUserCreateVisible;
  }
  
  isDropdownOpen = false;
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  
  isMenuVisible:boolean= false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Alterna el estado del menú
    
  const drawerNavigation = document.getElementById('drawer-navigation'); // O usa ElementRef
  if (this.isMenuVisible) {
    // Mostrar el menú
    this.renderer.removeClass(drawerNavigation, '-translate-x-full');
    this.renderer.addClass(drawerNavigation, 'translate-x-0');
  } else {
    // Ocultar el menú
    this.renderer.removeClass(drawerNavigation, 'translate-x-0');
    this.renderer.addClass(drawerNavigation, '-translate-x-full');
  }
  }
}
