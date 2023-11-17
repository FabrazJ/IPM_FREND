import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit{
  title = 'IPM_FREND';

  ngOnInit(): void {
    initFlowbite();
  }

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
