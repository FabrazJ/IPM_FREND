import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebarc/sidebar/sidebar.component';
import { RecoveryComponent } from './login/recovery/recovery.component';
import { UsercreateComponent } from './sidebarc/usercreate/usercreate.component';
import { DashboardComponent } from './sidebarc/dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    RecoveryComponent,
    UsercreateComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
