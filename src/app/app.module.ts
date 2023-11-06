import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebarc/sidebar/sidebar.component';
import { RecoveryComponent } from './login/recovery/recovery.component';
import { UsercreateComponent } from './sidebarc/usercreate/usercreate.component';
import { DashboardComponent } from './Pages/Dashboard/dashboard.component';

//Componentes
import { HeaderComponent } from './sidebarc/usercreate/header/header.component';
import { BodyComponent } from './sidebarc/usercreate/body/body.component';
import { EdituserComponent } from './sidebarc/usercreate/body/Modals/edituser/edituser.component';
import { AdduserComponent } from './sidebarc/usercreate/header/Modals/adduser/adduser.component';

//Http modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    RecoveryComponent,
    UsercreateComponent,
    DashboardComponent,

    //Componentes 
    HeaderComponent,
    BodyComponent,
    EdituserComponent,
    AdduserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Http
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
