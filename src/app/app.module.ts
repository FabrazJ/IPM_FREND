import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebarc/sidebar/sidebar.component';
import { RecoveryComponent } from './login/recovery/recovery.component';
import { UsercreateComponent } from './sidebarc/usercreate/usercreate.component';
import { DashboardComponent } from './sidebarc/dashboard/dashboard.component';

//Http modules
import { HttpClientModule } from '@angular/common/http';

// import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

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
    AppRoutingModule,ReactiveFormsModule,
    //Http
     HttpClientModule,
    // FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
