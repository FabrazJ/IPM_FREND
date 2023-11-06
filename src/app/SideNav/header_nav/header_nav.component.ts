import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header_nav',
  templateUrl: './header_nav.component.html',
  styleUrls: []
})
export class Header_navComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isDropdownOpen = false;

    
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
